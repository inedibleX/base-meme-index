import React, { useState } from 'react'
import { ArrowRightLeft, Loader2, X } from 'lucide-react'

interface RedeemBoxProps {
  bmiBalance: number
  onRedeem: (bmiAmount: number, ethAmount: number) => void
  bmiRate: number
  feePercentage: number
}

export const RedeemBox = ({
  bmiBalance,
  onRedeem,
  bmiRate,
  feePercentage,
}: RedeemBoxProps) => {
  const [redeemAmount, setRedeemAmount] = useState('')
  const [isRedeeming, setIsRedeeming] = useState(false)
  const [error, setError] = useState('')
  const [showRedeemConfirm, setShowRedeemConfirm] = useState(false)

  const calculateEthAmount = (bmiAmount: string) => {
    if (!bmiAmount) return 0
    const rawAmount = parseFloat(bmiAmount) / bmiRate
    return rawAmount * (1 - feePercentage)
  }

  const handleRedeemClick = () => {
    const bmiAmount = parseFloat(redeemAmount)
    if (bmiAmount > bmiBalance) {
      setError('Insufficient $BMI balance')
      return
    }
    setError('')
    setShowRedeemConfirm(true)
  }

  const handleRedeemConfirm = () => {
    const bmiAmount = parseFloat(redeemAmount)
    const ethToReceive = calculateEthAmount(redeemAmount)
    setShowRedeemConfirm(false)
    setIsRedeeming(true)

    onRedeem(bmiAmount, ethToReceive)
    setRedeemAmount('')
    setIsRedeeming(false)
  }

  return (
    <>
      <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
        <div className="mb-4 flex items-center">
          <ArrowRightLeft className="mr-2 h-6 w-6 text-sky-600" />
          <h2 className="text-xl font-semibold text-slate-800">Redeem $BMI</h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl bg-sky-50 p-4">
            <label
              className="mb-2 block text-sm text-slate-600"
              htmlFor="redeemAmount"
            >
              Amount in $BMI
            </label>
            <input
              className="w-full [appearance:textfield] rounded-lg border border-sky-200 bg-white px-4 py-2 text-slate-800 placeholder-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              min="0"
              onChange={(e) => {
                setRedeemAmount(e.target.value)
                setError('')
              }}
              placeholder="0.0"
              step="0.01"
              type="number"
              value={redeemAmount}
            />
            {redeemAmount && (
              <p className="mt-2 text-sm text-sky-600">
                You will receive {calculateEthAmount(redeemAmount).toFixed(4)}{' '}
                ETH
              </p>
            )}
          </div>
          <button
            className={`flex w-full transform items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] ${!redeemAmount || parseFloat(redeemAmount) > bmiBalance ? 'cursor-not-allowed opacity-50 hover:scale-100' : 'hover:from-blue-400 hover:to-sky-400'}`}
            disabled={
              !redeemAmount ||
              isRedeeming ||
              parseFloat(redeemAmount) > bmiBalance
            }
            onClick={handleRedeemClick}
          >
            {isRedeeming ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Redeeming $BMI...
              </>
            ) : (
              'Redeem'
            )}
          </button>
        </div>
      </div>

      {showRedeemConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-xl font-semibold text-slate-800">
                Confirm Redemption
              </h3>
              <button
                className="text-slate-400 hover:text-slate-600"
                onClick={() => setShowRedeemConfirm(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl bg-sky-50 p-4">
                <div className="mb-2 flex justify-between">
                  <span className="text-slate-600">You redeem:</span>
                  <span className="font-semibold text-slate-800">
                    {redeemAmount} $BMI
                  </span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span className="text-slate-600">
                    Fee ({feePercentage * 100}%):
                  </span>
                  <span className="font-semibold text-slate-800">
                    {(
                      (parseFloat(redeemAmount) / bmiRate) *
                      feePercentage
                    ).toFixed(4)}{' '}
                    ETH
                  </span>
                </div>
                <div className="flex justify-between border-t border-sky-200 pt-2">
                  <span className="text-slate-600">You receive:</span>
                  <span className="font-semibold text-sky-600">
                    {calculateEthAmount(redeemAmount).toFixed(4)} ETH
                  </span>
                </div>
              </div>
              <button
                className="w-full transform rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
                onClick={handleRedeemConfirm}
              >
                Confirm Redemption
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
