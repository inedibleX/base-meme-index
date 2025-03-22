import {
  useReadBmiTokenGetTokenInfo,
  useReadBmiTokenTotalSupply,
} from '@/generated/wagmi'
import { getTokenPriceQueryOptions } from '@/lib/queries/get-coingecko-price'
import { useQuery } from '@tanstack/react-query'
import { formatEther } from 'viem'
import { useMemo } from 'react'

export const useTVLCalculations = () => {
  const { data: tokenInfo, isLoading: isTokenInfoLoading } =
    useReadBmiTokenGetTokenInfo()

  const { data: totalSupply, isLoading: isTotalSupplyLoading } =
    useReadBmiTokenTotalSupply()

  const { data: tokenPrice, isLoading: isTokenPriceLoading } = useQuery({
    ...getTokenPriceQueryOptions(tokenInfo?.[0][0] ?? ''),
    enabled: !!tokenInfo?.[0][0],
  })

  const tvl = useMemo(() => {
    if (isTokenInfoLoading) return 0
    const balance = formatEther(tokenInfo?.[2][0] ?? BigInt(0))
    const usd = tokenPrice ?? 0
    return parseFloat(balance) * usd * 8
  }, [isTokenInfoLoading, tokenInfo, tokenPrice])

  const valueInUsd = useMemo(() => {
    if (isTokenInfoLoading || isTotalSupplyLoading) return 0
    if (
      totalSupply === undefined ||
      totalSupply === null ||
      totalSupply === BigInt(0)
    )
      return 0

    return tvl / Number(formatEther(totalSupply))
  }, [isTokenInfoLoading, isTotalSupplyLoading, totalSupply, tvl])

  return {
    tvl,
    valueInUsd,
    isLoading:
      isTokenInfoLoading || isTotalSupplyLoading || isTokenPriceLoading,
  }
}
