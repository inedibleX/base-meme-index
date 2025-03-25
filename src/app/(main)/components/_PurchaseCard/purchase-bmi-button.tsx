'use client'

import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useMemo, useState } from 'react'
import { BaseError, formatEther } from 'viem'
import {
  useAccount,
  useBalance,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'

import { ActionButton } from '@/app/(main)/components/action-button'
import { SwapConfirmationDialog } from '@/app/(main)/components/swap-confirmation-dialog'
import { useBmiTokenUsdPriceAndTVL } from '@/app/(main)/hooks/use-bmi-token-usd-price-and-tvl'
import {
  useReadBmiTokenBalanceOf,
  useReadBmiTokenTotalSupply,
  useSimulateIndexFundMint,
} from '@/generated/wagmi'
import { getEthPriceQueryOptions } from '@/lib/queries/get-eth-price'

type PurchaseBMIButtonProps = {
  amount: bigint
  onPurchase: (hash: string) => void
}

export const PurchaseBMIButton = ({
  amount,
  onPurchase,
}: PurchaseBMIButtonProps) => {
  const { usdPrice: bmiTokenUsdPrice, isLoading: isBmiTokenUsdPriceLoading } =
    useBmiTokenUsdPriceAndTVL()
  const { data: ethPrice } = useQuery(getEthPriceQueryOptions())

  const { address } = useAccount()
  const { refetch: refetchEthBalance } = useBalance({
    address,
  })
  const { refetch: refetchBmiTokenBalance } = useReadBmiTokenBalanceOf({
    args: [address as `0x${string}`],
  })
  const { refetch: refetchBmiTotalSupply } = useReadBmiTokenTotalSupply()

  const [showConfirmPurchaseDialog, setShowConfirmPurchaseDialog] =
    useState(false)

  const handlePurchaseClick = () => {
    setShowConfirmPurchaseDialog(true)
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

  const handlePurchaseConfirmed = () => {
    if (!simulatePurchaseData?.request) return
    void writeContract(simulatePurchaseData?.request)
    setShowConfirmPurchaseDialog(false)
  }

  useEffect(() => {
    async function refetch() {
      if (!isConfirmed || !receipt) return

      Promise.all([
        refetchEthBalance(),
        refetchBmiTokenBalance(),
        refetchBmiTotalSupply(),
      ])
    }
    void refetch()
  }, [
    isConfirmed,
    receipt,
    refetchEthBalance,
    refetchBmiTokenBalance,
    refetchBmiTotalSupply,
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

  const isLoading = isPurchaseSimulating || isConfirming || isPending

  const estimatedPurchasedBmiTokens = useMemo(() => {
    if (!ethPrice) return 0
    if (isBmiTokenUsdPriceLoading) return 0
    const amountInEth = formatEther(amount)
    const ethPricePerToken = bmiTokenUsdPrice / ethPrice
    const estimated = parseFloat(amountInEth) / ethPricePerToken
    return estimated
  }, [amount, ethPrice, isBmiTokenUsdPriceLoading, bmiTokenUsdPrice])

  return (
    <>
      <ActionButton
        disabled={isDisabled}
        isLoading={isLoading}
        onClick={handlePurchaseClick}
      >
        {isLoading ? 'Purchase' : 'Purchasing...'}
      </ActionButton>
      {errMsg && <p className="mt-2 text-sm text-red-500">{errMsg}</p>}

      <SwapConfirmationDialog
        confirmButtonText="Confirm Purchase"
        description="Are you sure you want to purchase $BMI?"
        onConfirm={handlePurchaseConfirmed}
        onOpenChange={setShowConfirmPurchaseDialog}
        open={showConfirmPurchaseDialog}
        title="Confirm Purchase"
        userPaysAmount={`${formatEther(amount)} ETH`}
        userReceivesAmount={`${estimatedPurchasedBmiTokens.toFixed(2)} $BMI`}
      />
    </>
  )
}
