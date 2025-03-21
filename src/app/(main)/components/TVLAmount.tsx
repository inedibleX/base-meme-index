'use client'

import { useReadBmiTokenGetTokenInfo } from '@/generated/wagmi'
import { numberFormat } from '@/lib/formatters'
import { getTokenPriceQueryOptions } from '@/lib/queries/get-coingecko-price'
import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useMemo } from 'react'
import { formatEther } from 'viem'

export const TVLAmount = () => {
  const { data: tokenInfo, isLoading: isTokenInfoLoading } =
    useReadBmiTokenGetTokenInfo()

  const { data: tokenPrice } = useQuery({
    ...getTokenPriceQueryOptions(tokenInfo?.[0][0] ?? ''),
    enabled: !!tokenInfo?.[0][0],
  })

  const tvl = useMemo(() => {
    if (isTokenInfoLoading) return 0
    const balance = formatEther(tokenInfo?.[2][0] ?? BigInt(0))
    const usd = tokenPrice ?? 0
    return parseFloat(balance) * usd * 8
  }, [isTokenInfoLoading, tokenInfo, tokenPrice])

  return (
    <div className="mb-8 flex items-center justify-between rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
      <h2 className="text-xl font-semibold text-slate-800">
        $BMI <span className="hidden sm:inline">Total Value Locked</span>{' '}
        <span className="inline sm:hidden">TVL</span>
      </h2>
      <p className="text-2xl font-bold text-sky-500">
        {isTokenInfoLoading ? (
          <Loader2 className="animate-spin" />
        ) : (
          `$${numberFormat(tvl, 2, 2)}`
        )}
      </p>
    </div>
  )
}
