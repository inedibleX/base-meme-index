import { queryOptions } from '@tanstack/react-query'

export interface TokenPrice {
  [tokenId: string]: {
    usd: number
  }
}

const queryTokenPrice = (tokenId: string): Promise<number> =>
  fetch(
    `https://api.coingecko.com/api/v3/simple/token_price/base?contract_addresses=${tokenId}&vs_currencies=usd`,
  )
    .then((res) => res.json())
    .then((res: TokenPrice) => {
      const price = res[tokenId.toLowerCase()]?.usd
      return typeof price === 'number' ? price : 0
    })
    .catch(() => 0)

export const getTokenPriceQueryOptions = (tokenId: string) => {
  return queryOptions({
    queryKey: getTokenPriceKey(tokenId),
    queryFn: () => queryTokenPrice(tokenId),
    retry: 2,
    refetchInterval: 60000,
  })
}

const getTokenPriceKey = (tokenId: string) =>
  ['COINGECKO_TOKEN_PRICE', tokenId] as const
