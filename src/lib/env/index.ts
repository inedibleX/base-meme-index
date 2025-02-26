import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    ETHERSCAN_KEY: z.string().min(34).max(34),
  },
  client: {
    NEXT_PUBLIC_ROOT_URI: z.string().url().default('http://localhost:3000'),
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: z.string().min(32).max(32),
    NEXT_PUBLIC_APP_NAME: z.string().default('Dapp Starter Kit'),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_ROOT_URI: process.env.NEXT_PUBLIC_ROOT_URI,
    NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID:
      process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  },
})
