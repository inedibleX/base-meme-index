import React from 'react'
import { Wallet } from 'lucide-react'
import { useAccount, useBalance } from 'wagmi'
import { formatEther } from 'viem'
import { numberFormat } from '@/lib/formatters'

interface UserBalanceCardProps {
  bmiBalance: number
  bmiUsdRate: number
}

export const UserBalanceCard = ({
  bmiBalance,
  bmiUsdRate,
}: UserBalanceCardProps) => {
  const calculateUsdValue = (bmiAmount: number) => {
    return bmiAmount * bmiUsdRate
  }

  const { address } = useAccount()
  const { data: ethBalance } = useBalance({
    address,
  })

  return (
    <div className="mb-8 rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center">
          <Wallet className="mr-3 h-8 w-8 text-sky-600" />
          <div>
            <h2 className="text-sm text-slate-600">Your Balance</h2>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-sky-600">
                {bmiBalance.toFixed(2)} $BMI
              </p>
              <p className="text-lg text-sky-500">
                {numberFormat(formatEther(ethBalance?.value ?? BigInt(0)))} ETH
              </p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-sm text-slate-600">Value in USD</h2>
          <p className="text-2xl font-bold text-green-600">
            ${numberFormat(calculateUsdValue(bmiBalance), 2, 2)}
          </p>
        </div>
      </div>
    </div>
  )
}
