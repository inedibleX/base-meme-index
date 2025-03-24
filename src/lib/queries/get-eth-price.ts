import { queryOptions } from '@tanstack/react-query'

export interface EthPrice {
  ethereum: {
    usd: number
  }
}

const queryEthPrice = (): Promise<number> =>
  fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`,
  )
    .then((res) => res.json())
    .then((res: EthPrice) => {
      const price = res.ethereum?.usd
      return typeof price === 'number' ? price : 0
    })
    .catch(() => 0)

export const getEthPriceQueryOptions = () => {
  return queryOptions({
    queryKey: getEthPriceKey(),
    queryFn: () => queryEthPrice(),
    retry: 2,
    refetchInterval: 60000,
  })
}

const getEthPriceKey = () => ['COINGECKO_ETH_PRICE'] as const
