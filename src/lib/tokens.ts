import { getAddress } from 'viem'

export interface Token {
  symbol: string
  icon: string
}

export const tokenMap: Record<`0x${string}`, Token> = {
  '0x532f27101965dd16442E59d40670FaF5eBB142E4': {
    symbol: 'BRETT',
    icon: '/tokens/brett.png',
  },
  '0x8544FE9D190fD7EC52860abBf45088E81Ee24a8c': {
    symbol: 'TOSHI',
    icon: '/tokens/toshi.png',
  },
  '0x6921B130D297cc43754afba22e5EAc0FBf8Db75b': {
    symbol: 'DOGINME',
    icon: '/tokens/doginme.png',
  },
  '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed': {
    symbol: 'DEGEN',
    icon: '/tokens/degen.png',
  },
  '0x9a26F5433671751C3276a065f57e5a02D2817973': {
    symbol: 'KEYCAT',
    icon: '/tokens/keycat.png',
  },
  '0x768BE13e1680b5ebE0024C42c896E3dB59ec0149': {
    symbol: 'SKI',
    icon: '/tokens/ski.png',
  },
  '0xB1a03EdA10342529bBF8EB700a06C60441fEf25d': {
    symbol: 'MIGGLES',
    icon: '/tokens/miggles.png',
  },
  '0x0d97F261b1e88845184f678e2d1e7a98D9FD38dE': {
    symbol: 'TYBG',
    icon: '/tokens/tybg.png',
  },
}

export const getToken = (tokenId: string) => {
  const token = getAddress(tokenId)
  return tokenMap[token as keyof typeof tokenMap]
}
