'use client'

import React from 'react'
import { ConnectWalletButton } from '@/components/connect-wallet-button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { LoaderCircleIcon } from 'lucide-react'

export const NavBarConnectWalletButton = () => {
  return (
    <div>
      <ConnectWalletButton
        connectedButton={({
          account,
          chain,
          openAccountModal,
          openChainModal,
        }) => {
          return (
            <div className={'flex items-center gap-x-2'}>
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
