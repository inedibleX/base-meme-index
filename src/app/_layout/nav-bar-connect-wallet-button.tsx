'use client'

import { LoaderCircleIcon, PlugIcon } from 'lucide-react'
import React from 'react'
import { useAccount } from 'wagmi'

import { ConnectButton } from '@/components/connect-button'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export const NavBarConnectWalletButton = () => {
  const { isReconnecting, isConnecting } = useAccount()

  if (isConnecting || isReconnecting) {
    return <Skeleton className="h-[36px] w-[200px] rounded-md" />
  }

  return (
    <div>
      <ConnectButton
        connectButton={({ openConnectModal }) => {
          return (
            <button
              className={
                'border-primary text-primary flex h-[36px] cursor-pointer items-center gap-x-2 rounded-full border px-4 py-2 hover:bg-gray-50'
              }
              onClick={openConnectModal}
              type="button"
            >
              Connect <PlugIcon className="size-4" />
            </button>
          )
        }}
        connectedButton={({
          account,
          chain,
          openAccountModal,
          openChainModal,
        }) => {
          return (
            <div className={'flex h-[36px] items-center gap-x-2'}>
              <button
                className={'cursor-pointer'}
                onClick={openAccountModal}
                type="button"
              >
                {account.displayBalance}
              </button>
              <button
                className={'cursor-pointer'}
                onClick={openChainModal}
                type={'button'}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={chain.name}
                  className={'size-6'}
                  height={24}
                  src={chain.iconUrl}
                  width={24}
                />
              </button>
              <button
                className={'cursor-pointer'}
                onClick={openAccountModal}
                type="button"
              >
                {account.displayName}
              </button>
              {account.hasPendingTransactions && (
                <PendingTransactionsIndicator />
              )}
            </div>
          )
        }}
      />
    </div>
  )
}

const PendingTransactionsIndicator = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className={'ml-2 transform animate-spin'}>
            <LoaderCircleIcon />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>You have pending transactions</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
