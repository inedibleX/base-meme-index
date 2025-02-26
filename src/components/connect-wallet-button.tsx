import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'
// @ts-expect-error wagmi is not typed
import { type ConnectButtonRendererProps } from '@rainbow-me/rainbowkit/dist/components/ConnectButton/ConnectButtonRenderer'

type RenderProps = {
  account: ConnectButtonRendererProps['account']
  chain: ConnectButtonRendererProps['chain']
}

type ConnectButtonProps = {
  openConnectModal: () => void
}

type ConnectedButtonProps = {
  openAccountModal: () => void
  openChainModal: () => void
} & RenderProps

type WrongNetworkButtonProps = {
  openChainModal: () => void
} & RenderProps

type ConnectWalletButtonProps = {
  connectedButton?: (props: ConnectedButtonProps) => React.ReactNode
  connectButton?: (props: ConnectButtonProps) => React.ReactNode
  wrongNetworkButton?: (props: WrongNetworkButtonProps) => React.ReactNode
}

export const ConnectWalletButton = ({
  connectedButton,
  connectButton,
  wrongNetworkButton,
}: ConnectWalletButtonProps) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading'
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === 'authenticated')

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                if (connectButton) {
                  return connectButton({ openConnectModal })
                }
                return (
                  <button onClick={openConnectModal} type="button">
                    Connect Wallet
                  </button>
                )
              }

              if (chain.unsupported) {
                if (wrongNetworkButton) {
                  return wrongNetworkButton({ account, chain, openChainModal })
                }
              }

              if (connectedButton) {
                return connectedButton({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                })
              }

              return <ConnectButton showBalance />
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}
