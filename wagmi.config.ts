import { defineConfig, loadEnv } from '@wagmi/cli'
import { etherscan, react } from '@wagmi/cli/plugins'
import { getAddress } from 'viem'
import { base } from 'viem/chains'

/** @type {import('@wagmi/cli').Config} */
export default defineConfig(() => {
  const env = loadEnv({
    mode: process.env.NODE_ENV,
    envDir: process.cwd(),
  })

  return {
    out: 'src/generated/wagmi.ts',
    contracts: [],
    plugins: [
      etherscan({
        apiKey: env.ETHERSCAN_KEY || '',
        chainId: base.id,
        contracts: [
          {
            name: 'IndexFund',
            address: {
              [base.id]: getAddress(
                '0x84A189D468d3538Daf98a0674756aCDBeA1aC2aF',
              ),
            },
          },
          {
            name: 'BMIToken',
            address: {
              [base.id]: getAddress(
                '0x6d3110bfad307A5E1eC8D64434cFf6d273Fc0bEc',
              ),
            },
          },
        ],
        tryFetchProxyImplementation: true,
      }),
      react(),
    ],
  }
})
