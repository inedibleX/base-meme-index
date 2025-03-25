import React from 'react'

export const Header = () => {
  return (
    <header className="px-4 pt-12 pb-16">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="mb-6 font-['Fredoka'] text-5xl font-bold tracking-wide text-white drop-shadow-lg">
          Base Meme Index
        </h1>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90">
          Base&apos;s first equal-weighted meme index fund! Deposit Ether and
          receive equal amounts of 8 top Base memes that constantly rebalance.
          Equal weighting has more volatility than cap weighting--as memes
          should!
        </p>
      </div>
    </header>
  )
}
