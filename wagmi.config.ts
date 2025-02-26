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
            name: 'OnlyUpFactory',
            address: {
              [base.id]: getAddress('0xfB2fC6E01b6D5aF48FBc3ECBA2cA1b69e811f74c'),
            },
          },
        ],
        tryFetchProxyImplementation: true,
      }),
      react(),
    ],
  }
})
