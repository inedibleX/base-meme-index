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
import { BaseError, parseEther } from 'viem'
import { BalanceButton } from './BalanceButton'
import { NumberInput } from './NumberInput'
import { Skeleton } from '@/components/ui/skeleton'

interface RedeemBoxProps {
  bmiRate: number
  feePercentage: number
}

export const RedeemBox = ({ bmiRate, feePercentage }: RedeemBoxProps) => {
  const { address } = useAccount()
  const {
    data: bmiBalance,
    isLoading: isBmiBalanceLoading,
    refetch: refetchBmiBalance,
  } = useReadBmiTokenBalanceOf({
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
      refetchBmiBalance()
    }
  }, [
    isConfirmed,
    receipt,
    redeemAmount,
    calculateEthAmount,
    refetchBmiBalance,
  ])

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
              {isBmiBalanceLoading ? (
                <Skeleton className="h-[20px] w-[80px] rounded-sm" />
              ) : (
                <BalanceButton
                  balance={bmiBalance ?? BigInt(0)}
                  isDisabled={!bmiBalance || !address}
                  label="$BMI"
                  onClick={(v) => setRedeemAmount(v)}
                />
              )}
            </div>
            <NumberInput
              id={'redeemAmount'}
              onChange={(v) => setRedeemAmount(v ?? '')}
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
