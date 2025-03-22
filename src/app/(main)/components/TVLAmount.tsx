'use client'

import { numberFormat } from '@/lib/formatters'
import { Loader2 } from 'lucide-react'
import { useTVLCalculations } from '../hooks/useTVLCalculations'

export const TVLAmount = () => {
  const { tvl, isLoading } = useTVLCalculations()

  return (
    <div className="mb-8 flex items-center justify-between rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
      <h2 className="text-xl font-semibold text-slate-800">
        $BMI <span className="hidden sm:inline">Total Value Locked</span>{' '}
        <span className="inline sm:hidden">TVL</span>
      </h2>
      <p className="text-2xl font-bold text-sky-500">
        {isLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          `$${numberFormat(tvl, 2, 2)}`
        )}
      </p>
    </div>
  )
}
