'use client'

import React, { useState } from 'react'
import { ArrowDownUp } from 'lucide-react'
import { useBalance, useAccount } from 'wagmi'
import { parseEther } from 'viem'
import { BalanceButton } from '../BalanceButton'
import { NumberInput } from '../NumberInput'
import { Skeleton } from '@/components/ui/skeleton'
import { PurchaseBMIButton } from './PurchaseBMIButton'

interface PurchaseBoxProps {
  bmiRate: number
  feePercentage: number
}

export const PurchaseBox = ({ bmiRate, feePercentage }: PurchaseBoxProps) => {
  const [purchaseAmount, setPurchaseAmount] = useState('')

  const { address } = useAccount()
  const { data: ethBalance, isLoading: isEthBalanceLoading } = useBalance({
    address,
  })

  return (
    <>
      <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
        <div className="mb-4 flex items-center">
          <ArrowDownUp className="mr-2 h-6 w-6 text-sky-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Purchase $BMI
          </h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl bg-sky-50 p-4">
            <div className="flex items-center justify-between">
              <label
                className="mb-2 block text-sm text-slate-600"
                htmlFor="purchaseAmount"
              >
                Amount in ETH
              </label>
              {isEthBalanceLoading ? (
                <Skeleton className="h-[20px] w-[80px] rounded-sm" />
              ) : (
                <BalanceButton
                  balance={ethBalance?.value ?? BigInt(0)}
                  isDisabled={!ethBalance || !address}
                  label="ETH"
                  onClick={(v) => setPurchaseAmount(v)}
                />
              )}
            </div>
            <NumberInput
              id={'purchaseAmount'}
              onChange={(v) => setPurchaseAmount(v ?? '')}
              value={purchaseAmount}
            />
          </div>
          <PurchaseBMIButton
            amount={parseEther(purchaseAmount)}
            bmiRate={bmiRate}
            feePercentage={feePercentage}
            onPurchase={() => {
              setPurchaseAmount('')
            }}
          />
        </div>
      </div>
    </>
  )
}
