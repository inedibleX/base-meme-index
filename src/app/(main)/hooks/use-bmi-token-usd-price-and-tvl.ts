import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { formatEther } from 'viem'

import {
  useReadBmiTokenTotalSupply,
  useReadVaultGetPoolTokenInfo,
} from '@/generated/wagmi'
import { getTokenPriceQueryOptions } from '@/lib/queries/get-coingecko-price'

export const useBmiTokenUsdPriceAndTVL = () => {
  // TODO: replace with a dynamic token and address
  const { data: tokenInfo, isLoading: isTokenInfoLoading } =
    useReadVaultGetPoolTokenInfo({
      args: [
        '0xffa997dfed184a220392ebae7c054c39d87ad00f0001000000000000000001d2',
        '0x0d97f261b1e88845184f678e2d1e7a98d9fd38de',
      ],
    })

  const { data: totalSupply, isLoading: isTotalSupplyLoading } =
    useReadBmiTokenTotalSupply()

  // TODO: and this one
  const { data: tokenUsdPrice, isLoading: isTokenPriceLoading } = useQuery({
    ...getTokenPriceQueryOptions('0x0d97f261b1e88845184f678e2d1e7a98d9fd38de'),
    enabled: !!tokenInfo,
  })

  const tvl = useMemo(() => {
    if (isTokenInfoLoading) return 0
    const cash = parseFloat(formatEther(tokenInfo?.[0] ?? BigInt(0)))
    return cash * (tokenUsdPrice ?? 0) * 8
  }, [isTokenInfoLoading, tokenInfo, tokenUsdPrice])

  const bmiTokenUsdPrice = useMemo(() => {
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
    usdPrice: bmiTokenUsdPrice,
    isLoading:
      isTokenInfoLoading || isTotalSupplyLoading || isTokenPriceLoading,
  }
}
