import { Header } from './components/Header'
import { UserBalanceCard } from './components/UserBalanceCard'
import { PurchaseBox } from './components/_Purchase/PurchaseBox'
import { RedeemBox } from './components/_Redeem/RedeemBox'
import { IndexComposition } from './components/IndexComposition'
import { TVLAmount } from './components/TVLAmount'

export default function Home() {
  const BMI_RATE = 100 // 1 ETH = 100 BMI tokens
  const FEE_PERCENTAGE = 0.01 // 1% fee

  return (
    <div>
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-24">
        <UserBalanceCard />

        <div className="mb-8 grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <PurchaseBox bmiRate={BMI_RATE} feePercentage={FEE_PERCENTAGE} />
          <RedeemBox bmiRate={BMI_RATE} feePercentage={FEE_PERCENTAGE} />
        </div>

        <TVLAmount />

        <IndexComposition />
      </main>
    </div>
  )
}
