'use client'

import React, { useMemo } from 'react'
import { Wallet } from 'lucide-react'
import { useAccount, useBalance } from 'wagmi'
import { formatEther } from 'viem'
import { numberFormat } from '@/lib/formatters'
import { useReadBmiTokenBalanceOf } from '@/generated/wagmi'
import { useTVLCalculations } from '../hooks/useTVLCalculations'

export const UserBalanceCard = () => {
  const { valueInUsd } = useTVLCalculations()

  const { address } = useAccount()
  const { data: ethBalance } = useBalance({
    address,
  })
  const { data: bmiBalance } = useReadBmiTokenBalanceOf({
    args: [address as `0x${string}`],
    query: {
      enabled: !!address,
    },
  })

  const bmiBalanceInUsd = useMemo(() => {
    return bmiBalance ? Number(bmiBalance) * valueInUsd : 0
  }, [bmiBalance, valueInUsd])

  return (
    <div className="mb-8 rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center">
          <Wallet className="mr-3 h-8 w-8 text-sky-600" />
          <div>
            <h2 className="text-sm text-slate-600">Your Balance</h2>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-sky-600">
                {numberFormat(formatEther(bmiBalance ?? BigInt(0)))} $BMI
              </p>
              <p className="text-lg text-sky-500">
                {numberFormat(formatEther(ethBalance?.value ?? BigInt(0)))} ETH
              </p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-sm text-slate-600">Value in USD</h2>
          <p className="text-2xl font-bold text-green-600">
            ${numberFormat(bmiBalanceInUsd, 2, 2)}
          </p>
        </div>
      </div>
    </div>
  )
}
