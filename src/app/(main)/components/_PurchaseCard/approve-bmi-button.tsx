import { useEffect } from 'react'
import { BaseError, maxUint256 } from 'viem'
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'

import { ActionButton } from '@/app/(main)/components/action-button'
import {
  useReadBmiTokenAllowance,
  useSimulateBmiTokenApprove,
} from '@/generated/wagmi'
import { env } from '@/lib/env'

type ApproveBMIButtonProps = {
  amount: bigint
  onApprove: (hash: string) => void
  actionButton: React.ReactNode
}

export const ApproveBMIButton = ({
  amount,
  actionButton,
  onApprove,
}: ApproveBMIButtonProps) => {
  const { address } = useAccount()
  const {
    data: bmiTokenAllowance,
    isLoading: isBmiTokenAllowanceLoading,
    refetch: refetchBmiTokenAllowance,
  } = useReadBmiTokenAllowance({
    args: [
      address as `0x${string}`,
      env.NEXT_PUBLIC_INDEX_FUND_ADDRESS as `0x${string}`,
    ],
    query: {
      enabled: !!amount && !!address && amount > BigInt(0),
    },
  })

  const {
    data: simulateApproveData,
    error: simulateApproveError,
    isLoading: isApproveSimulating,
  } = useSimulateBmiTokenApprove({
    args: [env.NEXT_PUBLIC_INDEX_FUND_ADDRESS as `0x${string}`, maxUint256],
    query: {
      enabled: !!amount && !!address && amount > BigInt(0),
      retry: 0,
    },
  })

  const {
    data: hash,
    error: txError,
    writeContract,
    isPending,
  } = useWriteContract()

  const {
    isLoading: isConfirming,
    data: receipt,
    isSuccess: isConfirmed,
  } = useWaitForTransactionReceipt({
    hash,
  })

  useEffect(() => {
    async function refetch() {
      if (!isConfirmed || !receipt) return
      refetchBmiTokenAllowance()
    }
    void refetch()
  }, [isConfirmed, receipt, refetchBmiTokenAllowance])

  useEffect(() => {
    if (isConfirmed && receipt) {
      onApprove(receipt.transactionHash)
    }
  }, [isConfirmed, receipt, onApprove])

  const handleApproveClick = () => {
    if (!simulateApproveData?.request) return
    writeContract(simulateApproveData?.request)
  }

  const isDisabled =
    isBmiTokenAllowanceLoading ||
    isApproveSimulating ||
    isConfirming ||
    isPending ||
    amount === BigInt(0)

  const isLoading = isApproveSimulating || isConfirming || isPending

  if (
    amount === BigInt(0) ||
    (bmiTokenAllowance && bmiTokenAllowance >= amount)
  )
    return actionButton

  const errorMsg =
    (simulateApproveError as BaseError)?.shortMessage ||
    (txError as BaseError)?.shortMessage

  return (
    <>
      <ActionButton
        disabled={isDisabled}
        isLoading={isLoading}
        onClick={handleApproveClick}
      >
        {isLoading ? 'Approve $EMI' : 'Approving...'}
      </ActionButton>

      {errorMsg && <p className="mt-2 text-sm text-red-500">{errorMsg}</p>}
    </>
  )
}
