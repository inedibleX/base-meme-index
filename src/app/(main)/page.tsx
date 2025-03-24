import { Header } from './components/Header'
import { UserBalanceCard } from './components/UserBalanceCard'
import { PurchaseBox } from './components/_Purchase/PurchaseBox'
import { RedeemBox } from './components/_Redeem/RedeemBox'
import { IndexComposition } from './components/IndexComposition'
import { TVLAmount } from './components/TVLAmount'
import { getQueryClient } from '@/lib/queries/get-query-client'
import { getEthPriceQueryOptions } from '@/lib/queries/get-eth-price'
export default function Home() {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(getEthPriceQueryOptions())

  return (
    <div>
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-24">
        <UserBalanceCard />

        <div className="mb-8 grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <PurchaseBox />
          <RedeemBox />
        </div>

        <TVLAmount />

        <IndexComposition />
      </main>
    </div>
  )
}
