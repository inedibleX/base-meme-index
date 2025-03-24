import {
  useReadBmiTokenTotalSupply,
  useReadVaultGetPoolTokenInfo,
} from '@/generated/wagmi'
import { getTokenPriceQueryOptions } from '@/lib/queries/get-coingecko-price'
import { useQuery } from '@tanstack/react-query'
import { formatEther } from 'viem'
import { useMemo } from 'react'

export const useTVLCalculations = () => {
  const { data: tokenInfo, isLoading: isTokenInfoLoading } =
    useReadVaultGetPoolTokenInfo({
      args: [
        '0xffa997dfed184a220392ebae7c054c39d87ad00f0001000000000000000001d2',
        '0x0d97f261b1e88845184f678e2d1e7a98d9fd38de',
      ],
    })

  const { data: totalSupply, isLoading: isTotalSupplyLoading } =
    useReadBmiTokenTotalSupply()

  const { data: tokenPrice, isLoading: isTokenPriceLoading } = useQuery({
    ...getTokenPriceQueryOptions('0x0d97f261b1e88845184f678e2d1e7a98d9fd38de'),
    enabled: !!tokenInfo,
  })

  const tvl = useMemo(() => {
    if (isTokenInfoLoading) return 0
    const balance = formatEther(tokenInfo?.[0] ?? BigInt(0))
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
