import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import React, { type ReactElement } from 'react'
import { http, type Chain } from 'viem'
import { WagmiProvider, createConfig } from 'wagmi'
import { base } from 'wagmi/chains'
import { mock } from 'wagmi/connectors'
import { mockedAccounts } from './mock-wallet'
import {
  connectorsForWallets,
  RainbowKitProvider,
  WalletList,
} from '@rainbow-me/rainbowkit'
import { getQueryClient } from '@/lib/queries/get-query-client'
// @ts-expect-error provider props are not typed
import { type RainbowKitProviderProps } from '@rainbow-me/rainbowkit/dist/components/RainbowKitProvider/RainbowKitProvider'

const queryClient = getQueryClient()
const defaultChains: readonly [Chain, ...Chain[]] = [base]

// https://github.com/rainbow-me/rainbowkit/blob/main/packages/rainbowkit/test/index.tsx#L36
export function renderWithProviders(
  component: ReactElement,
  options?: {
    chains?: readonly [Chain, ...Chain[]]
    mockWallets?: WalletList
    props?: Omit<RainbowKitProviderProps, 'children'>
  },
) {
  const supportedChains = options?.chains || defaultChains

  const config = createConfig({
    chains: supportedChains,
    connectors: options?.mockWallets
      ? connectorsForWallets(options.mockWallets, {
          appName: 'rainbowkit.com',
          projectId: process.env.WALLETCONNECT_PROJECT_ID ?? 'YOUR_PROJECT_ID',
        })
      : [
          mock({
            accounts: mockedAccounts,
          }),
        ],
    transports: {
      ...options?.chains?.reduce(
        (acc, chain) => ({
          ...acc,
          [chain.id]: http,
        }),
        {},
      ),
    },
  })

  return render(component, {
    wrapper: ({ children }) => (
      // @ts-expect-error wagmi config is not typed
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider {...options?.props}>
            {children}
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    ),
  })
}
