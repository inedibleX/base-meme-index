'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { ArrowRightLeft, Loader2, X } from 'lucide-react'
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import {
  useReadBmiTokenBalanceOf,
  useSimulateIndexFundRedeem,
} from '@/generated/wagmi'
import { numberFormat } from '@/lib/formatters'
import { BaseError, formatEther, parseEther } from 'viem'

interface RedeemBoxProps {
  bmiRate: number
  feePercentage: number
}

export const RedeemBox = ({ bmiRate, feePercentage }: RedeemBoxProps) => {
  const { address } = useAccount()
  const { data: bmiBalance } = useReadBmiTokenBalanceOf({
    args: [address as `0x${string}`],
    query: {
      enabled: !!address,
    },
  })

  const [redeemAmount, setRedeemAmount] = useState('')
  const [showRedeemConfirm, setShowRedeemConfirm] = useState(false)

  const handleRedeemClick = () => {
    setShowRedeemConfirm(true)
  }

  const handleRedeemConfirm = () => {
    if (!simulateRedeemData?.request) return
    void writeContract(simulateRedeemData?.request)
    setShowRedeemConfirm(false)
  }

  const {
    data: simulateRedeemData,
    error: simulateRedeemError,
    isLoading: isRedeemSimulating,
  } = useSimulateIndexFundRedeem({
    args: [parseEther(redeemAmount)],
    query: {
      enabled: !!redeemAmount,
      retry: 0,
    },
  })

  const {
    data: hash,
    error: txError,
    writeContract,
    isPending,
  } = useWriteContract()

  const {
    isLoading: isConfirming,
    data: receipt,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  })

  const calculateEthAmount = useCallback(
    (bmiAmount: string) => {
      if (!bmiAmount) return 0
      const rawAmount = parseFloat(bmiAmount) / bmiRate
      return rawAmount * (1 - feePercentage)
    },
    [bmiRate, feePercentage],
  )

  useEffect(() => {
    if (isConfirmed && receipt) {
      setRedeemAmount('')
    }
  }, [isConfirmed, receipt, redeemAmount, calculateEthAmount])

  const errMsg =
    (txError as BaseError)?.shortMessage ||
    (simulateRedeemError as BaseError)?.shortMessage

  const isDisabled =
    !simulateRedeemData || isRedeemSimulating || isConfirming || isPending

  return (
    <>
      <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
        <div className="mb-4 flex items-center">
          <ArrowRightLeft className="mr-2 h-6 w-6 text-sky-600" />
          <h2 className="text-xl font-semibold text-slate-800">Redeem $BMI</h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl bg-sky-50 p-4">
            <div className="flex items-center justify-between">
              <label
                className="mb-2 block text-sm text-slate-600"
                htmlFor="purchaseAmount"
              >
                Amount in $BMI
              </label>
              <button
                className="cursor-pointer text-sm text-sky-600 hover:text-sky-800"
                onClick={() => {
                  setRedeemAmount(
                    numberFormat(
                      formatEther(bmiBalance ?? BigInt(0)),
                      2,
                      6,
                      'floor',
                    ).replace(',', ''),
                  )
                }}
              >
                {numberFormat(formatEther(bmiBalance ?? BigInt(0)))} $BMI
              </button>
            </div>
            <input
              className="w-full [appearance:textfield] rounded-lg border border-sky-200 bg-white px-4 py-2 text-slate-800 placeholder-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              min="0"
              onChange={(e) => {
                setRedeemAmount(e.target.value)
              }}
              placeholder="0.0"
              step="0.01"
              type="number"
              value={redeemAmount}
            />
            {redeemAmount && (
              <p className="mt-2 text-sm text-sky-600">
                You will receive {calculateEthAmount(redeemAmount).toFixed(4)}{' '}
                ETH
              </p>
            )}
          </div>
          <button
            className={`flex w-full transform items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] ${isDisabled ? 'cursor-not-allowed opacity-50 hover:scale-100' : 'hover:from-blue-400 hover:to-sky-400'}`}
            disabled={isDisabled}
            onClick={handleRedeemClick}
          >
            {isRedeemSimulating || isConfirming || isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Redeeming $BMI...
              </>
            ) : (
              'Redeem'
            )}
          </button>
          {errMsg && <p className="mt-2 text-sm text-red-500">{errMsg}</p>}
        </div>
      </div>

      {showRedeemConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-xl font-semibold text-slate-800">
                Confirm Redemption
              </h3>
              <button
                className="text-slate-400 hover:text-slate-600"
                onClick={() => setShowRedeemConfirm(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl bg-sky-50 p-4">
                <div className="mb-2 flex justify-between">
                  <span className="text-slate-600">You redeem:</span>
                  <span className="font-semibold text-slate-800">
                    {redeemAmount} $BMI
                  </span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span className="text-slate-600">
                    Fee ({feePercentage * 100}%):
                  </span>
                  <span className="font-semibold text-slate-800">
                    {(
                      (parseFloat(redeemAmount) / bmiRate) *
                      feePercentage
                    ).toFixed(4)}{' '}
                    ETH
                  </span>
                </div>
                <div className="flex justify-between border-t border-sky-200 pt-2">
                  <span className="text-slate-600">You receive:</span>
                  <span className="font-semibold text-sky-600">
                    {calculateEthAmount(redeemAmount).toFixed(4)} ETH
                  </span>
                </div>
              </div>
              <button
                className="w-full transform rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
                onClick={handleRedeemConfirm}
              >
                Confirm Redemption
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
