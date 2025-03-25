'use client'

import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import {
  argentWallet,
  coinbaseWallet,
  ledgerWallet,
  metaMaskWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  safeWallet,
  tokenPocketWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { cookieStorage, createConfig, createStorage, http } from 'wagmi'
import { base } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

import { env } from '@/lib/env'

const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''

if (!walletConnectProjectId) {
  throw new Error(
    'WalletConnect project ID is not defined. Please check your environment variables.',
  )
}

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [
        metaMaskWallet,
        coinbaseWallet,
        ledgerWallet,
        rainbowWallet,
        tokenPocketWallet,
        walletConnectWallet,
        rabbyWallet,
        argentWallet,
        safeWallet,
        phantomWallet,
      ],
    },
  ],
  { appName: env.NEXT_PUBLIC_APP_NAME, projectId: walletConnectProjectId },
)

export const config = createConfig({
  chains: [base],
  connectors: [injected(), ...connectors],
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  transports: {
    [base.id]: http(),
  },
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
