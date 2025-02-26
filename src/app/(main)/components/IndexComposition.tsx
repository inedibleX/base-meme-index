import React from 'react'
import { PieChart } from 'lucide-react'

interface Token {
  name: string
  weight: number
  icon: string
  color: string
}

interface IndexCompositionProps {
  tokens: Token[]
}

export const IndexComposition = ({ tokens }: IndexCompositionProps) => {
  return (
    <div className="rounded-2xl bg-white/90 p-6 shadow-xl backdrop-blur-md">
      <div className="mb-6 flex items-center">
        <PieChart className="mr-2 h-6 w-6 text-sky-600" />
        <h2 className="text-xl font-semibold text-slate-800">Index Weight</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {tokens.map((token) => (
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
  )
}
