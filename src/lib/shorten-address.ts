import { getAddress } from 'viem'

export function shortenAddress(address: string, characters: number = 4) {
  try {
    const parsed = getAddress(address)
    return `${parsed.substring(0, characters + 2)}...${parsed.substring(42 - characters)}`
  } catch {
    throw `Invalid 'address' parameter '${address}'.`
  }
}
