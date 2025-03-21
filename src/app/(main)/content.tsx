'use client'
import React, { useState } from 'react'
import { Header } from './components/Header'
import { UserBalanceCard } from './components/UserBalanceCard'
import { PurchaseBox } from './components/PurchaseBox'
import { RedeemBox } from './components/RedeemBox'
import { IndexComposition } from './components/IndexComposition'

export const Content = () => {
  const [bmiBalance, setBmiBalance] = useState(0)
  const [error, setError] = useState('')

  const BMI_RATE = 100 // 1 ETH = 100 BMI tokens
  const FEE_PERCENTAGE = 0.01 // 1% fee

  const handlePurchase = (ethAmount: number, bmiAmount: number) => {
    setBmiBalance((prev) => prev + bmiAmount)
  }

  const handleRedeem = (bmiAmount: number, ethAmount: number) => {
    setBmiBalance((prev) => prev - bmiAmount)
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
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-24">
        <UserBalanceCard />

        {error && (
          <div className="mb-6 rounded-lg border border-red-400 bg-red-100 px-4 py-3 text-red-700">
            {error}
          </div>
        )}

        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <PurchaseBox
            bmiRate={BMI_RATE}
            feePercentage={FEE_PERCENTAGE}
            onPurchase={handlePurchase}
          />
          <RedeemBox
            bmiBalance={bmiBalance}
            bmiRate={BMI_RATE}
            feePercentage={FEE_PERCENTAGE}
            onRedeem={handleRedeem}
          />
        </div>

        <IndexComposition tokens={indexTokens} />
      </main>
    </div>
  )
}
