'use client'

import { Wallet } from 'lucide-react'
import React, { useMemo } from 'react'
import { formatEther } from 'viem'
import { useAccount, useBalance } from 'wagmi'

import { useBmiTokenUsdPriceAndTVL } from '@/app/(main)/hooks/use-bmi-token-usd-price-and-tvl'
import { Skeleton } from '@/components/ui/skeleton'
import { useReadBmiTokenBalanceOf } from '@/generated/wagmi'
import { numberFormat } from '@/lib/formatters'

export const UserBalanceCard = () => {
  const { usdPrice: bmiTokenUsdPrice, isLoading: isBmiTokenUsdPriceLoading } =
    useBmiTokenUsdPriceAndTVL()

  const { address } = useAccount()
  const { data: ethBalance, isLoading: isEthBalanceLoading } = useBalance({
    address,
  })
  const { data: bmiTokenBalance, isLoading: isBmiTokenBalanceLoading } =
    useReadBmiTokenBalanceOf({
      args: [address as `0x${string}`],
    })

  const usdBalance = useMemo(() => {
    return bmiTokenBalance
      ? Number(formatEther(bmiTokenBalance)) * bmiTokenUsdPrice
      : 0
  }, [bmiTokenBalance, bmiTokenUsdPrice])

  return (
    <div className="mb-8 rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center">
          <Wallet className="mr-3 h-8 w-8 text-sky-600" />
          <div>
            <h2 className="text-sm text-slate-600">Your Balance</h2>
            <div className="space-y-1">
              {isBmiTokenBalanceLoading ? (
                <Skeleton className="h-[32px] w-[95px] rounded-sm" />
              ) : (
                <p className="text-2xl font-bold text-sky-600">
                  {numberFormat(formatEther(bmiTokenBalance ?? BigInt(0)))} $EMI
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-sm text-slate-600">Value in USD</h2>
          {isBmiTokenUsdPriceLoading ? (
            <Skeleton className="h-[32px] w-[80px] rounded-sm" />
          ) : (
            <p className="text-2xl font-bold text-green-600">
              ${numberFormat(usdBalance, 2, 2)}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
