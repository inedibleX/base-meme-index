'use client'

import { numberFormat } from '@/lib/formatters'
import { useTVLCalculations } from '../hooks/useTVLCalculations'
import { Skeleton } from '@/components/ui/skeleton'

export const TVLAmount = () => {
  const { tvl, isLoading } = useTVLCalculations()

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
