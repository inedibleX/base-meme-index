'use client'

import { useBmiTokenUsdPriceAndTVL } from '@/app/(main)/hooks/use-bmi-token-usd-price-and-tvl'
import { Skeleton } from '@/components/ui/skeleton'
import { numberFormat } from '@/lib/formatters'

export const TVLAmountCard = () => {
  const { tvl, isLoading } = useBmiTokenUsdPriceAndTVL()

  return (
    <div className="mb-8 flex items-center justify-between rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
      <h2 className="grow text-xl font-semibold text-slate-800">
        $BMI <span className="hidden sm:inline">Total Value Locked</span>{' '}
        <span className="inline sm:hidden">TVL</span>
      </h2>
      <div className="text-2xl font-bold text-sky-500">
        {isLoading ? (
          <Skeleton className="h-[32px] w-[80px] rounded-sm" />
        ) : (
          `$${numberFormat(tvl, 2, 2)}`
        )}
      </div>
    </div>
  )
}
