'use client'

import React, { useEffect, useMemo, useState } from 'react'
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
import { Loader2 } from 'lucide-react'
import { ConfirmationDialog } from '../confirmation-dialog'
import { useQuery } from '@tanstack/react-query'
import { getEthPriceQueryOptions } from '@/lib/queries/get-eth-price'
import { useBmiTokenUsdPriceAndTVL } from '../../hooks/use-bmi-token-usd-price-and-tvl'
import { ActionButton } from '../action-button'
type RedeemBMIButtonProps = {
  amount: bigint
  onRedeem: (hash: string) => void
}

export const RedeemBMIButton = ({ amount, onRedeem }: RedeemBMIButtonProps) => {
  const [showRedeemConfirm, setShowRedeemConfirm] = useState(false)

  const { data: ethPrice } = useQuery(getEthPriceQueryOptions())
  const {
    usdPrice: bmiTokenUsdPrice,
    isLoading: isBmiTokenValueUsdPriceLoading,
  } = useBmiTokenUsdPriceAndTVL()

  // for refetching and keeping the UI in sync
  const { address } = useAccount()
  const { refetch: refetchBmiBalance } = useReadBmiTokenBalanceOf({
    args: [address as `0x${string}`],
  })
  const { refetch: refetchEthBalance } = useBalance({
    address,
  })
  const { refetch: refetchBMITotalSupply } = useReadBmiTokenTotalSupply()
  // TODO: replace with a dynamic token and address
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
    async function refetch() {
      if (!isConfirmed || !receipt) return

      Promise.all([
        refetchBmiBalance(),
        refetchEthBalance(),
        refetchBMITotalSupply(),
        refetchTokenInfo(),
      ])
    }
    void refetch()
  }, [
    isConfirmed,
    receipt,
    refetchBMITotalSupply,
    refetchBmiBalance,
    refetchEthBalance,
    refetchTokenInfo,
  ])

  useEffect(() => {
    if (isConfirmed && receipt) {
      onRedeem(receipt.transactionHash)
    }
  }, [isConfirmed, receipt, onRedeem])

  const handleRedeemClick = () => {
    setShowRedeemConfirm(true)
  }

  const handleRedeemConfirm = () => {
    if (!simulateRedeemData?.request) return
    void writeContract(simulateRedeemData?.request)
    setShowRedeemConfirm(false)
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

  const estimatedRedeemedEth = useMemo(() => {
    if (!ethPrice) return 0
    if (isBmiTokenValueUsdPriceLoading) return 0
    const tokenAmount = formatEther(amount)
    const ethPricePerToken = bmiTokenUsdPrice / ethPrice
    const estimated = ethPricePerToken * parseFloat(tokenAmount)
    return estimated
  }, [amount, ethPrice, isBmiTokenValueUsdPriceLoading, bmiTokenUsdPrice])

  return (
    <>
      <ActionButton
        disabled={isDisabled}
        isLoading={isLoading}
        onClick={handleRedeemClick}
      >
        {isLoading ? 'Redeem' : 'Redeeming...'}
      </ActionButton>

      {errMsg && <p className="mt-2 text-sm text-red-500">{errMsg}</p>}

      <ConfirmationDialog
        confirmButtonText="Confirm Redemption"
        description="Are you sure you want to redeem $BMI?"
        onConfirm={handleRedeemConfirm}
        onOpenChange={setShowRedeemConfirm}
        open={showRedeemConfirm}
        title="Confirm Redemption"
      >
        <div className="flex items-center justify-center">
          <div className="w-full space-y-4">
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
                  {estimatedRedeemedEth.toFixed(6)} ETH
                </span>
              </div>
            </div>
          </div>
        </div>
      </ConfirmationDialog>
    </>
  )
}
