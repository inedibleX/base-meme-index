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
              [base.id]: getAddress(env.NEXT_PUBLIC_INDEX_FUND_ADDRESS),
            },
          },
          {
            name: 'BMIToken',
            address: {
              [base.id]: getAddress(env.NEXT_PUBLIC_BMI_TOKEN_ADDRESS),
            },
          },
          {
            name: 'Vault',
            address: {
              [base.id]: getAddress(env.NEXT_PUBLIC_VAULT_ADDRESS),
            },
          },
        ],
        tryFetchProxyImplementation: true,
      }),
      react(),
    ],
  }
})
