'use client'

import { ArrowRightLeft } from 'lucide-react'
import React, { useCallback, useState } from 'react'
import { parseEther } from 'viem'
import { useAccount } from 'wagmi'

import { Skeleton } from '@/components/ui/skeleton'
import { useReadBmiTokenBalanceOf } from '@/generated/wagmi'
import { toastTxSuccess } from '@/lib/toast'

import { ApproveBMIButton } from '../_PurchaseCard/approve-bmi-button'
import { BalanceButton } from '../balance-button'
import { NumberInput } from '../number-input'
import { RedeemBMIButton } from './redeem-bmi-button'

export const RedeemCard = () => {
  const { address } = useAccount()
  const { data: bmiTokenBalance, isLoading: isBmiTokenBalanceLoading } =
    useReadBmiTokenBalanceOf({
      args: [address as `0x${string}`],
    })
  const [redeemAmount, setRedeemAmount] = useState('')

  const onRedeem = useCallback((hash: string) => {
    setRedeemAmount('')
    toastTxSuccess(
      'Transaction successful',
      'Your $BMI has been redeemed!',
      hash,
    )
  }, [])

  const onApprove = useCallback((hash: string) => {
    toastTxSuccess(
      'Transaction successful',
      'Your $BMI has been approved!',
      hash,
    )
  }, [])

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
              {isBmiTokenBalanceLoading ? (
                <Skeleton className="h-[20px] w-[80px] rounded-sm" />
              ) : (
                <BalanceButton
                  balance={bmiTokenBalance ?? BigInt(0)}
                  isDisabled={!bmiTokenBalance || !address}
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
          </div>
          <ApproveBMIButton
            actionButton={
              <RedeemBMIButton
                amount={parseEther(redeemAmount ?? '0')}
                onRedeem={onRedeem}
              />
            }
            amount={parseEther(redeemAmount ?? '0')}
            onApprove={onApprove}
          />
        </div>
      </div>
    </>
  )
}
