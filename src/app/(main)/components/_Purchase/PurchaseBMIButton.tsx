'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { Loader2, X } from 'lucide-react'
import {
  useBalance,
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from 'wagmi'
import {
  useReadBmiTokenBalanceOf,
  useReadBmiTokenTotalSupply,
  useSimulateIndexFundMint,
} from '@/generated/wagmi'
import { BaseError, formatEther } from 'viem'
import { useTVLCalculations } from '../../hooks/useTVLCalculations'

type PurchaseBMIButtonProps = {
  amount: bigint
  bmiRate: number
  feePercentage: number
  onPurchase: () => void
}

export const PurchaseBMIButton = ({
  amount,
  bmiRate,
  feePercentage,
  onPurchase,
}: PurchaseBMIButtonProps) => {
  const { valueInUsd, isLoading: isValueInUsdLoading } = useTVLCalculations()

  const { address } = useAccount()
  const { refetch: refetchEthBalance } = useBalance({
    address,
  })
  const { refetch: refetchBMI } = useReadBmiTokenBalanceOf({
    args: [address as `0x${string}`],
  })
  const { refetch: refetchBMITotalSupply } = useReadBmiTokenTotalSupply()

  const [showPurchaseConfirm, setShowPurchaseConfirm] = useState(false)

  const handlePurchaseClick = () => {
    setShowPurchaseConfirm(true)
  }

  const {
    data: simulatePurchaseData,
    error: simulatePurchaseError,
    isLoading: isPurchaseSimulating,
  } = useSimulateIndexFundMint({
    value: amount,
    query: {
      enabled: !!address && amount > BigInt(0),
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

  const handlePurchaseConfirm = () => {
    if (!simulatePurchaseData?.request) return
    void writeContract(simulatePurchaseData?.request)
    setShowPurchaseConfirm(false)
  }

  const calculateBmiAmount = useCallback(
    (ethAmount: string) => {
      if (!ethAmount) return 0
      const rawAmount = parseFloat(ethAmount) * bmiRate
      return rawAmount * (1 - feePercentage)
    },
    [bmiRate, feePercentage],
  )

  useEffect(() => {
    if (isConfirmed && receipt) {
      Promise.all([refetchEthBalance(), refetchBMI(), refetchBMITotalSupply()])
      onPurchase()
    }
  }, [
    isConfirmed,
    receipt,
    refetchEthBalance,
    refetchBMI,
    refetchBMITotalSupply,
    onPurchase,
  ])

  const errMsg =
    (txError as BaseError)?.shortMessage ||
    (simulatePurchaseError as BaseError)?.shortMessage

  const isDisabled =
    !simulatePurchaseData || isPurchaseSimulating || isConfirming || isPending

  const calculateEstimate = useCallback(() => {
    if (isValueInUsdLoading) return 0
    return parseFloat(formatEther(amount)) / valueInUsd
  }, [amount, isValueInUsdLoading, valueInUsd])

  return (
    <>
      <button
        className={`flex w-full transform items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] ${isDisabled ? 'cursor-not-allowed opacity-50 hover:scale-100' : 'hover:from-sky-400 hover:to-blue-400'}`}
        disabled={isDisabled}
        onClick={handlePurchaseClick}
      >
        {isPurchaseSimulating || isConfirming || isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Purchasing $BMI...
          </>
        ) : (
          'Purchase'
        )}
      </button>
      {errMsg && <p className="mt-2 text-sm text-red-500">{errMsg}</p>}

      {showPurchaseConfirm && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-xl font-semibold text-slate-800">
                Confirm Purchase
              </h3>
              <button
                className="text-slate-400 hover:text-slate-600"
                onClick={() => setShowPurchaseConfirm(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl bg-sky-50 p-4">
                <div className="mb-2 flex justify-between">
                  <span className="text-slate-600">You pay:</span>
                  <span className="font-semibold text-slate-800">
                    {formatEther(amount)} ETH
                  </span>
                </div>
                <div className="flex justify-between border-t border-sky-200 pt-2">
                  <span className="text-slate-600">You receive (est.):</span>
                  <span className="font-semibold text-sky-600">
                    {calculateEstimate().toFixed(2)} $BMI
                  </span>
                </div>
              </div>
              <button
                className="w-full transform rounded-xl bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
                onClick={handlePurchaseConfirm}
              >
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
