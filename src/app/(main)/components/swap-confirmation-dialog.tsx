import React from 'react'

import { ConfirmationDialog } from '@/components/confirmation-dialog'

type WithoutChildren<T> = Omit<T, 'children'>

type SwapConfirmationDialogProps = {
  userPaysAmount: React.ReactNode
  userReceivesAmount: React.ReactNode
} & WithoutChildren<React.ComponentProps<typeof ConfirmationDialog>>

export const SwapConfirmationDialog = ({
  userPaysAmount,
  userReceivesAmount,
  ...props
}: SwapConfirmationDialogProps) => {
  return (
    <ConfirmationDialog {...props}>
      <div className="flex items-center justify-center">
        <div className="w-full space-y-4">
          <div className="rounded-xl bg-sky-50 p-4">
            <div className="mb-2 flex justify-between">
              <span className="text-slate-600">You pay:</span>
              <span className="font-semibold text-slate-800">
                {userPaysAmount}
              </span>
            </div>
            <div className="flex justify-between border-t border-sky-200 pt-2">
              <span className="text-slate-600">You receive (est.):</span>
              <span className="font-semibold text-sky-600">
                {userReceivesAmount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </ConfirmationDialog>
  )
}
