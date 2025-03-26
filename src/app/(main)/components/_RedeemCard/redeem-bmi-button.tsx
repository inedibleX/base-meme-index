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

import {
  useReadBmiTokenBalanceOf,
  useReadBmiTokenTotalSupply,
  useReadVaultGetPoolTokenInfo,
  useSimulateIndexFundRedeem,
} from '@/generated/wagmi'
import { getEthPriceQueryOptions } from '@/lib/queries/get-eth-price'

import { useBmiTokenUsdPriceAndTVL } from '../../hooks/use-bmi-token-usd-price-and-tvl'
import { ActionButton } from '../action-button'
import { SwapConfirmationDialog } from '../swap-confirmation-dialog'

type RedeemBMIButtonProps = {
  amount: bigint
  onRedeem: (hash: string) => void
}

export const RedeemBMIButton = ({ amount, onRedeem }: RedeemBMIButtonProps) => {
  const [showConfirmRedeemDialog, setShowConfirmRedeemDialog] = useState(false)

  const { data: ethPrice } = useQuery(getEthPriceQueryOptions())
  const {
    usdPrice: bmiTokenUsdPrice,
    isLoading: isBmiTokenValueUsdPriceLoading,
  } = useBmiTokenUsdPriceAndTVL()

  // for refetching and keeping the UI in sync
  const { address } = useAccount()
  const { refetch: refetchBmiTokenBalance } = useReadBmiTokenBalanceOf({
    args: [address as `0x${string}`],
  })
  const { refetch: refetchEthBalance } = useBalance({
    address,
  })
  const { refetch: refetchBmiTokenTotalSupply } = useReadBmiTokenTotalSupply()
  // TODO: replace with a dynamic token and address
  const { refetch: refetchPoolTokenInfo } = useReadVaultGetPoolTokenInfo({
    args: [
      '0xB8931645216D8FF2B4D8323A6BBbEf9bD482DB350001000000000000000001d2',
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
    async function refetch() {
      if (!isConfirmed || !receipt) return

      Promise.all([
        refetchEthBalance(),
        refetchBmiTokenBalance(),
        refetchBmiTokenTotalSupply(),
        refetchPoolTokenInfo(),
      ])
    }
    void refetch()
  }, [
    isConfirmed,
    receipt,
    refetchEthBalance,
    refetchBmiTokenBalance,
    refetchBmiTokenTotalSupply,
    refetchPoolTokenInfo,
  ])

  useEffect(() => {
    if (isConfirmed && receipt) {
      onRedeem(receipt.transactionHash)
    }
  }, [isConfirmed, receipt, onRedeem])

  const handleRedeemClick = () => {
    setShowConfirmRedeemDialog(true)
  }

  const handleRedeemConfirmed = () => {
    setShowConfirmRedeemDialog(false)
    if (!simulateRedeemData?.request) return
    void writeContract(simulateRedeemData?.request)
  }

  let errMsg =
    (txError as BaseError)?.shortMessage ||
    (simulateRedeemError as BaseError)?.shortMessage

  if (errMsg && errMsg === 'User rejected the request.') {
    errMsg = ''
  }

  const isDisabled =
    !simulateRedeemData || isRedeemSimulating || isConfirming || isPending

  const isLoading = isRedeemSimulating || isConfirming || isPending

  const estimatedEthReceived = useMemo(() => {
    if (!ethPrice) return 0
    if (isBmiTokenValueUsdPriceLoading) return 0
    const tokenAmount = parseFloat(formatEther(amount))
    const ethPricePerToken = bmiTokenUsdPrice / ethPrice
    const estimated = ethPricePerToken * tokenAmount
    return estimated
  }, [amount, ethPrice, isBmiTokenValueUsdPriceLoading, bmiTokenUsdPrice])

  return (
    <>
      <ActionButton
        disabled={isDisabled}
        isLoading={isLoading}
        onClick={handleRedeemClick}
      >
        {!isLoading ? 'Redeem' : 'Redeeming...'}
      </ActionButton>

      {errMsg && <p className="mt-2 text-sm text-red-500">{errMsg}</p>}

      <SwapConfirmationDialog
        confirmButtonText="Confirm Redemption"
        description="Are you sure you want to redeem $BMI?"
        onConfirm={handleRedeemConfirmed}
        onOpenChange={setShowConfirmRedeemDialog}
        open={showConfirmRedeemDialog}
        title="Confirm Redemption"
        userPaysAmount={`${formatEther(amount)} $BMI`}
        userReceivesAmount={`${estimatedEthReceived.toFixed(6)} ETH`}
      />
    </>
  )
}
