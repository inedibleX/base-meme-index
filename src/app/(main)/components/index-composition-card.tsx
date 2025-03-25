import { PieChart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { tokenMap } from '@/lib/tokens'

export const IndexCompositionCard = () => {
  return (
    <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
      <div className="mb-6 flex items-center">
        <PieChart className="mr-2 h-6 w-6 text-sky-600" />
        <h2 className="text-xl font-semibold text-slate-800">
          Index Composition
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Object.values(tokenMap).map((token) => (
          <div
            className="rounded-xl border border-sky-100 bg-sky-50 p-4"
            key={token.symbol}
          >
            <div className="flex flex-col items-center justify-between md:flex-row">
              <Image
                alt={token.symbol}
                className="!size-12 rounded-full "
                height={48}
                src={token.icon}
                width={48}
              />
              <div>${token.symbol}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
