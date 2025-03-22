'use client'

import { getQueryClient } from '@/lib/queries/get-query-client'
import { config } from '@/lib/wagmi.config'
import { QueryClientProvider } from '@tanstack/react-query'
import { darkTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { type ReactNode } from 'react'
import { type State, WagmiProvider } from 'wagmi'
import { baseSepolia } from 'viem/chains'
import { env } from '@/lib/env'

export function Providers(props: {
  children: ReactNode
  initialState?: State
}) {
  // NOTE: Avoid useState when initializing the query client if you don't
  //       have a suspense boundary between this and the code that may
  //       suspend because React will throw away the client on the initial
  //       render if it suspends and there is no boundary
  const queryClient = getQueryClient()
  const appInfo = {
    appName: env.NEXT_PUBLIC_APP_NAME,
  }

  return (
    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          appInfo={appInfo}
          coolMode
          initialChain={baseSepolia}
          modalSize={'compact'}
          showRecentTransactions
          theme={darkTheme()}
        >
          {props.children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
