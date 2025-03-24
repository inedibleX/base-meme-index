'use client'

import React, { useCallback, useEffect, useState } from 'react'
import {
  useAccount,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import {
  useReadBmiTokenBalanceOf,
  useReadBmiTokenTotalSupply,
  useReadVaultGetPoolTokenInfo,
  useSimulateIndexFundRedeem,
} from '@/generated/wagmi'
import { BaseError, formatEther } from 'viem'
import { Loader2, X } from 'lucide-react'

type RedeemBMIButtonProps = {
  amount: bigint
  bmiRate: number
  feePercentage: number
  onRedeem: () => void
}

export const RedeemBMIButton = ({
  amount,
  bmiRate,
  feePercentage,
  onRedeem,
}: RedeemBMIButtonProps) => {
  const [showRedeemConfirm, setShowRedeemConfirm] = useState(false)

  const { address } = useAccount()
  // for refetching and keeping the UI in sync
  const { refetch: refetchBmiBalance } = useReadBmiTokenBalanceOf({
    args: [address as `0x${string}`],
  })
  const { refetch: refetchEthBalance } = useBalance({
    address,
  })
  const { refetch: refetchBMITotalSupply } = useReadBmiTokenTotalSupply()
  const { refetch: refetchTokenInfo } = useReadVaultGetPoolTokenInfo({
    args: [
      '0xffa997dfed184a220392ebae7c054c39d87ad00f0001000000000000000001d2',
      '0x0d97f261b1e88845184f678e2d1e7a98d9fd38de',
    ],
  })

  const {
    data: simulateRedeemData,
    error: simulateRedeemError,
    isLoading: isRedeemSimulating,
  } = useSimulateIndexFundRedeem({
    args: [amount],
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

  useEffect(() => {
    if (isConfirmed && receipt) {
      Promise.all([
        refetchBmiBalance(),
        refetchEthBalance(),
        refetchBMITotalSupply(),
        refetchTokenInfo(),
      ])
      onRedeem()
    }
  }, [
    isConfirmed,
    receipt,
    refetchBmiBalance,
    refetchEthBalance,
    refetchBMITotalSupply,
    refetchTokenInfo,
    onRedeem,
  ])

  const handleRedeemClick = () => {
    setShowRedeemConfirm(true)
  }

  const handleRedeemConfirm = () => {
    if (!simulateRedeemData?.request) return
    void writeContract(simulateRedeemData?.request)
    setShowRedeemConfirm(false)
  }

  const calculateEthAmount = useCallback(
    (bmiAmount: string) => {
      if (!bmiAmount) return 0
      const rawAmount = parseFloat(bmiAmount) / bmiRate
      return rawAmount * (1 - feePercentage)
    },
    [bmiRate, feePercentage],
  )

  const errMsg =
    (txError as BaseError)?.shortMessage ||
    (simulateRedeemError as BaseError)?.shortMessage

  const isDisabled =
    !simulateRedeemData || isRedeemSimulating || isConfirming || isPending

  return (
    <>
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
                    {formatEther(amount)} $BMI
                  </span>
                </div>
                <div className="flex justify-between border-t border-sky-200 pt-2">
                  <span className="text-slate-600">You receive (est.):</span>
                  <span className="font-semibold text-sky-600">
                    {calculateEthAmount(formatEther(amount)).toFixed(4)} ETH
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
