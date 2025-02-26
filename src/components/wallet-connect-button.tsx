'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

import { ConnectButton } from '@/components/connect-button'
import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const WalletConnectButton = ({
  children,
  variant = 'default',
  size = 'default',
  className,
  buttonClassName,
  showUnmounted = true,
}: {
  children: ReactNode
  className?: string
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  buttonClassName?: string
  showUnmounted?: boolean
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const { isReconnecting, isConnected, isConnecting, isDisconnected } =
    useAccount()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className={className}>
      {!isMounted && showUnmounted && (
        <Button
          className={cn('w-full', buttonClassName)}
          disabled
          size={size}
          variant={variant}
        >
          &nbsp;
        </Button>
      )}
      {isMounted && (
        <>
          {(isConnecting || isReconnecting) && (
            <Button
              className={cn('w-full', buttonClassName)}
              disabled
              size={size}
              variant={variant}
            >
              Checking Wallet...
            </Button>
          )}
          {isDisconnected && (
            <ConnectButton
              connectButton={({ openConnectModal }) => (
                <Button
                  className={cn('w-full', buttonClassName)}
                  onClick={openConnectModal}
                  size={size}
                  variant={variant}
                >
                  Connect to Wallet
                </Button>
              )}
            />
          )}
          {isConnected && children}
        </>
      )}
    </div>
  )
}
