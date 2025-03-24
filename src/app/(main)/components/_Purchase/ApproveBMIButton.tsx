import {
  useReadBmiTokenAllowance,
  useSimulateBmiTokenApprove,
} from '@/generated/wagmi'
import { env } from '@/lib/env'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { BaseError, maxUint256 } from 'viem'
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'

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
    data: bmiAllowance,
    isLoading: isBmiAllowanceLoading,
    refetch: refetchBmiAllowance,
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
      refetchBmiAllowance()
    }
    void refetch()
  }, [isConfirmed, receipt, refetchBmiAllowance])

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
    isBmiAllowanceLoading ||
    isApproveSimulating ||
    isConfirming ||
    isPending ||
    amount === BigInt(0)

  if (amount === BigInt(0) || (bmiAllowance && bmiAllowance >= amount))
    return actionButton

  const errorMsg =
    (simulateApproveError as BaseError)?.shortMessage ||
    (txError as BaseError)?.shortMessage

  return (
    <>
      <button
        className={`flex w-full transform items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] ${isDisabled ? 'cursor-not-allowed opacity-50 hover:scale-100' : 'hover:from-blue-400 hover:to-sky-400'}`}
        disabled={isDisabled}
        onClick={handleApproveClick}
      >
        {isApproveSimulating || isConfirming || isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Approving $BMI...
          </>
        ) : (
          'Approve $BMI'
        )}
      </button>

      {errorMsg && <p className="mt-2 text-sm text-red-500">{errorMsg}</p>}
    </>
  )
}
