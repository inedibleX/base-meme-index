import { numberFormat } from '@/lib/formatters'
import { cn } from '@/lib/utils'
import { formatEther } from 'viem'

export const BalanceButton = ({
  balance,
  label,
  isDisabled,
  onClick,
}: {
  balance: bigint
  isDisabled: boolean
  onClick: (v: string) => void
  label: string
}) => {
  return (
    <button
      className={cn(
        'cursor-pointer text-sm text-sky-600 hover:text-sky-800',
        isDisabled ? 'cursor-not-allowed opacity-50' : '',
      )}
      disabled={isDisabled}
      onClick={() => {
        onClick(
          numberFormat(
            formatEther(balance ?? BigInt(0)),
            2,
            6,
            'floor',
          ).replace(',', ''),
        )
      }}
    >
      {numberFormat(formatEther(balance ?? BigInt(0)))} {label}
    </button>
  )
}
