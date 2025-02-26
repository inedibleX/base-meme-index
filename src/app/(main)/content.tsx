'use client'
import React, { useState } from 'react'
import {
  Wallet,
  ArrowRightLeft,
  PieChart,
  ArrowDownUp,
  Loader2,
  X,
} from 'lucide-react'

export const Content = () => {
  const [bmiBalance, setBmiBalance] = useState(0)
  const [ethBalance, setEthBalance] = useState(10) // Starting with 10 ETH
  const [purchaseAmount, setPurchaseAmount] = useState('')
  const [redeemAmount, setRedeemAmount] = useState('')
  const [isPurchasing, setIsPurchasing] = useState(false)
  const [isRedeeming, setIsRedeeming] = useState(false)
  const [error, setError] = useState('')
  const [showPurchaseConfirm, setShowPurchaseConfirm] = useState(false)
  const [showRedeemConfirm, setShowRedeemConfirm] = useState(false)

  const BMI_RATE = 100 // 1 ETH = 100 BMI tokens
  const BMI_USD_RATE = 30 // 1 BMI = $30 USD
  const FEE_PERCENTAGE = 0.01 // 1% fee

  const calculateBmiAmount = (ethAmount: string) => {
    if (!ethAmount) return 0
    const rawAmount = parseFloat(ethAmount) * BMI_RATE
    return rawAmount * (1 - FEE_PERCENTAGE) // Apply 1% fee
  }

  const calculateEthAmount = (bmiAmount: string) => {
    if (!bmiAmount) return 0
    const rawAmount = parseFloat(bmiAmount) / BMI_RATE
    return rawAmount * (1 - FEE_PERCENTAGE) // Apply 1% fee
  }

  const calculateUsdValue = (bmiAmount: number) => {
    return bmiAmount * BMI_USD_RATE
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
    setShowPurchaseConfirm(false)
    setIsPurchasing(true)

    // Calculate BMI tokens to receive
    const bmiToReceive = calculateBmiAmount(purchaseAmount)

    // Simulate transaction
    setTimeout(() => {
      setEthBalance((prev) => prev - ethAmount)
      setBmiBalance((prev) => prev + bmiToReceive)
      setPurchaseAmount('')
      setIsPurchasing(false)
    }, 2000)
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
    setShowRedeemConfirm(false)
    setIsRedeeming(true)

    // Calculate ETH to receive
    const ethToReceive = calculateEthAmount(redeemAmount)

    // Simulate transaction
    setTimeout(() => {
      setBmiBalance((prev) => prev - bmiAmount)
      setEthBalance((prev) => prev + ethToReceive)
      setRedeemAmount('')
      setIsRedeeming(false)
    }, 2000)
  }

  const indexTokens = [
    { name: 'PEPE', weight: 20, icon: '🐸', color: 'from-sky-300 to-sky-400' },
    {
      name: 'DOGE',
      weight: 15,
      icon: '🐕',
      color: 'from-blue-300 to-blue-400',
    },
    { name: 'SHIB', weight: 12, icon: '🐕', color: 'from-sky-400 to-blue-500' },
    {
      name: 'WOJAK',
      weight: 10,
      icon: '😢',
      color: 'from-blue-400 to-sky-500',
    },
    {
      name: 'FLOKI',
      weight: 10,
      icon: '🐕',
      color: 'from-sky-300 to-blue-400',
    },
    { name: 'BONK', weight: 8, icon: '🐕', color: 'from-blue-300 to-sky-400' },
    { name: 'SAMO', weight: 7, icon: '🐕', color: 'from-sky-400 to-blue-400' },
    {
      name: 'CHEEMS',
      weight: 7,
      icon: '🐕',
      color: 'from-blue-300 to-sky-500',
    },
    { name: 'HOGE', weight: 6, icon: '🐕', color: 'from-sky-300 to-blue-500' },
    { name: 'CATE', weight: 5, icon: '🐱', color: 'from-blue-300 to-sky-400' },
  ]

  return (
    <div>
      {/* Header */}
      <header className="px-4 pt-8 pb-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 font-['Fredoka'] text-5xl font-bold tracking-wide text-white drop-shadow-lg">
            Base Meme Index
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
            Ready to ride the meme wave? 🚀 Grab your slice of the hottest Base
            memecoins with one token! Our index auto-rebalances weekly to keep
            you surfing the top performers.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 pb-24">
        {/* User Balance Card */}
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
                    {ethBalance.toFixed(2)} ETH
                  </p>
                </div>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-sm text-slate-600">Value in USD</h2>
              <p className="text-2xl font-bold text-green-600">
                $
                {calculateUsdValue(bmiBalance).toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-lg border border-red-400 bg-red-100 px-4 py-3 text-red-700">
            {error}
          </div>
        )}

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {/* Purchase Box */}
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
                    You will receive{' '}
                    {calculateBmiAmount(purchaseAmount).toFixed(2)} $BMI
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

          {/* Redeem Box */}
          <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
            <div className="mb-4 flex items-center">
              <ArrowRightLeft className="mr-2 h-6 w-6 text-sky-600" />
              <h2 className="text-xl font-semibold text-slate-800">
                Redeem $BMI
              </h2>
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
                    You will receive{' '}
                    {calculateEthAmount(redeemAmount).toFixed(4)} ETH
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
        </div>

        {/* Index Composition */}
        <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
          <div className="mb-6 flex items-center">
            <PieChart className="mr-2 h-6 w-6 text-sky-600" />
            <h2 className="text-xl font-semibold text-slate-800">
              Index Weight
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {indexTokens.map((token) => (
              <div
                className="rounded-xl border border-sky-100 bg-sky-50 p-4"
                key={token.name}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="flex items-center text-lg font-medium text-slate-700">
                    <span className="mr-2">{token.icon}</span>${token.name}
                  </span>
                  <span className="text-slate-600">{token.weight}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white">
                  <div
                    className={`bg-gradient-to-r ${token.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${token.weight}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Purchase Confirmation Modal */}
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
                  <span className="text-slate-600">Fee (1%):</span>
                  <span className="font-semibold text-slate-800">
                    {(parseFloat(purchaseAmount) * FEE_PERCENTAGE).toFixed(4)}{' '}
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

      {/* Redeem Confirmation Modal */}
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
                  <span className="text-slate-600">Fee (1%):</span>
                  <span className="font-semibold text-slate-800">
                    {(
                      (parseFloat(redeemAmount) / BMI_RATE) *
                      FEE_PERCENTAGE
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
    </div>
  )
}
