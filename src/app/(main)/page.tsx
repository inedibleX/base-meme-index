import { Header } from './components/header'
import { UserBalanceCard } from './components/user-balance-card'
import { PurchaseCard } from './components/_PurchaseCard/purchase-card'
import { RedeemCard } from './components/_RedeemCard/redeem-card'
import { IndexComposition } from './components/index-composition'
import { TVLAmount } from './components/tvl-amount'
import { getQueryClient } from '@/lib/queries/get-query-client'
import { getEthPriceQueryOptions } from '@/lib/queries/get-eth-price'
import { Metadata } from 'next'
export default function Home() {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(getEthPriceQueryOptions())

  return (
    <div>
      <Header />
      <main className="mx-auto max-w-6xl px-4 pb-24">
        <UserBalanceCard />
        <div className="mb-8 grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <PurchaseCard />
          <RedeemCard />
        </div>
        <TVLAmount />
        <IndexComposition />
      </main>
    </div>
  )
}

const description = `Invest in Base's first equal-weighted meme index fund. Get exposure to 8 top Base memes with automatic rebalancing. More volatility, more opportunity. Start with ETH.`

export const metadata: Metadata = {
  title: `Base Meme Index`,
  description,
  keywords:
    'base meme index fund, equal-weighted crypto fund, meme token investment, base memes, diversified meme portfolio, crypto index fund, automated rebalancing, meme volatility, ethereum to memes',
  openGraph: {
    title: `Base Meme Index`,
    description,
    images: [
      {
        url: '/favicon-512x512.png',
        width: 512,
        height: 512,
        alt: `Base Meme Index Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base Meme Index',
    description,
    creator: '@GoatTradingDex',
    images: ['/favicon-512x512.png'],
  },
}
