import React, { useState } from 'react'
import { ArrowDownUp, Loader2, X } from 'lucide-react'

interface PurchaseBoxProps {
  ethBalance: number
  onPurchase: (ethAmount: number, bmiAmount: number) => void
  bmiRate: number
  feePercentage: number
}

export const PurchaseBox = ({
  ethBalance,
  onPurchase,
  bmiRate,
  feePercentage,
}: PurchaseBoxProps) => {
  const [purchaseAmount, setPurchaseAmount] = useState('')
  const [isPurchasing, setIsPurchasing] = useState(false)
  const [error, setError] = useState('')
  const [showPurchaseConfirm, setShowPurchaseConfirm] = useState(false)

  const calculateBmiAmount = (ethAmount: string) => {
    if (!ethAmount) return 0
    const rawAmount = parseFloat(ethAmount) * bmiRate
    return rawAmount * (1 - feePercentage)
  }

  const handlePurchaseClick = () => {
    const ethAmount = parseFloat(purchaseAmount)
    if (ethAmount > ethBalance) {
      setError('Insufficient ETH balance')
      return
    }
    setError('')
    setShowPurchaseConfirm(true)
  }

  const handlePurchaseConfirm = () => {
    const ethAmount = parseFloat(purchaseAmount)
    const bmiToReceive = calculateBmiAmount(purchaseAmount)
    setShowPurchaseConfirm(false)
    setIsPurchasing(true)

    onPurchase(ethAmount, bmiToReceive)
    setPurchaseAmount('')
    setIsPurchasing(false)
  }

  return (
    <>
      <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
        <div className="mb-4 flex items-center">
          <ArrowDownUp className="mr-2 h-6 w-6 text-sky-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            Purchase $BMI
          </h2>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl bg-sky-50 p-4">
            <label
              className="mb-2 block text-sm text-slate-600"
              htmlFor="purchaseAmount"
            >
              Amount in ETH
            </label>
            <input
              className="w-full [appearance:textfield] rounded-lg border border-sky-200 bg-white px-4 py-2 text-slate-800 placeholder-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              id="purchaseAmount"
              min="0"
              onChange={(e) => {
                setPurchaseAmount(e.target.value)
                setError('')
              }}
              placeholder="0.0"
              step="0.01"
              type="number"
              value={purchaseAmount}
            />
            {purchaseAmount && (
              <p className="mt-2 text-sm text-sky-600">
                You will receive {calculateBmiAmount(purchaseAmount).toFixed(2)}{' '}
                $BMI
              </p>
            )}
          </div>
          <button
            className={`flex w-full transform items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] ${!purchaseAmount || parseFloat(purchaseAmount) > ethBalance ? 'cursor-not-allowed opacity-50 hover:scale-100' : 'hover:from-sky-400 hover:to-blue-400'}`}
            disabled={
              !purchaseAmount ||
              isPurchasing ||
              parseFloat(purchaseAmount) > ethBalance
            }
            onClick={handlePurchaseClick}
          >
            {isPurchasing ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Purchasing $BMI...
              </>
            ) : (
              'Purchase'
            )}
          </button>
        </div>
      </div>

      {showPurchaseConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-xl font-semibold text-slate-800">
                Confirm Purchase
              </h3>
              <button
                className="text-slate-400 hover:text-slate-600"
                onClick={() => setShowPurchaseConfirm(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl bg-sky-50 p-4">
                <div className="mb-2 flex justify-between">
                  <span className="text-slate-600">You pay:</span>
                  <span className="font-semibold text-slate-800">
                    {purchaseAmount} ETH
                  </span>
                </div>
                <div className="mb-2 flex justify-between">
                  <span className="text-slate-600">
                    Fee ({feePercentage * 100}%):
                  </span>
                  <span className="font-semibold text-slate-800">
                    {(parseFloat(purchaseAmount) * feePercentage).toFixed(4)}{' '}
                    ETH
                  </span>
                </div>
                <div className="flex justify-between border-t border-sky-200 pt-2">
                  <span className="text-slate-600">You receive:</span>
                  <span className="font-semibold text-sky-600">
                    {calculateBmiAmount(purchaseAmount).toFixed(2)} $BMI
                  </span>
                </div>
              </div>
              <button
                className="w-full transform rounded-xl bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02]"
                onClick={handlePurchaseConfirm}
              >
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
