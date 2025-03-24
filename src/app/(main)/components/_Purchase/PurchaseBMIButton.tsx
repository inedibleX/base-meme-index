'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Loader2 } from 'lucide-react'
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
import { ConfirmationDialog } from '../ConfirmationDIalog'
import { useQuery } from '@tanstack/react-query'
import { getEthPriceQueryOptions } from '@/lib/queries/get-eth-price'

type PurchaseBMIButtonProps = {
  amount: bigint
  onPurchase: (hash: string) => void
}

export const PurchaseBMIButton = ({
  amount,
  onPurchase,
}: PurchaseBMIButtonProps) => {
  const { valueInUsd, isLoading: isValueInUsdLoading } = useTVLCalculations()
  const { data: ethPrice } = useQuery(getEthPriceQueryOptions())

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

  useEffect(() => {
    async function refetch() {
      if (!isConfirmed || !receipt) return

      Promise.all([refetchEthBalance(), refetchBMI(), refetchBMITotalSupply()])
    }
    void refetch()
  }, [
    isConfirmed,
    receipt,
    refetchEthBalance,
    refetchBMI,
    refetchBMITotalSupply,
  ])

  useEffect(() => {
    if (isConfirmed && receipt) {
      onPurchase(receipt.transactionHash)
    }
  }, [isConfirmed, receipt, onPurchase])

  let errMsg =
    (txError as BaseError)?.shortMessage ||
    (simulatePurchaseError as BaseError)?.shortMessage

  if (errMsg && errMsg === 'User rejected the request.') {
    errMsg = ''
  }

  const isDisabled =
    !simulatePurchaseData || isPurchaseSimulating || isConfirming || isPending

  const estimatedAmount = useMemo(() => {
    if (!ethPrice) return 0
    if (isValueInUsdLoading) return 0
    const ethAmount = formatEther(amount)
    const ethPricePerToken = valueInUsd / ethPrice
    const estimated = parseFloat(ethAmount) / ethPricePerToken
    return estimated
  }, [amount, ethPrice, isValueInUsdLoading, valueInUsd])

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

      <ConfirmationDialog
        confirmButtonText="Confirm Purchase"
        description="Are you sure you want to purchase $BMI?"
        onConfirm={handlePurchaseConfirm}
        onOpenChange={setShowPurchaseConfirm}
        open={showPurchaseConfirm}
        title="Confirm Purchase"
      >
        <div className="flex items-center justify-center">
          <div className="w-full space-y-4">
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
                  {estimatedAmount.toFixed(2)} $BMI
                </span>
              </div>
            </div>
          </div>
        </div>
      </ConfirmationDialog>
    </>
  )
}
