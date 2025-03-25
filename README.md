# Base Meme Index

Base's first equal-weighted meme index fund! Deposit Ether and receive equal amounts of 8 top Base memes that constantly rebalance. Equal weighting has more volatility than cap weighting--as memes should!

## Dependencies
- Next.js v15.1.17
- TypeScript v5.0
- Tailwind CSS v4.0
- React Query v5.0
- Viem v2.0
- Wagmi v2.0
- RainbowKit v2.0
- Vitest v3.0
- Zod v3.0

## Getting Started
1. Clone the repository to your local machine.
2. Copy `.env.example` to `.env.local` and update the values with your configuration.
3. Copy `.env.test.example` to `.env.test.local`.
4. Install dependencies: `npm install`.
5. Start the development server: `npm run dev`.
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing
This project uses `vitest`, `@react-testing-library/jest-dom`, and `@testing-library/react` for testing.
- Run `npm run test` to execute the tests.
- Run `npm run test:watch` for watch mode.

## Linting
- Run `npm run lint` or `npm run lint:fix`

## Wagmi Codegen
If you update the contract addresses in your environment variables, run `npm run codegen:wagmi` to regenerate the React hooks for interacting with the contracts.

## Building
Build the project by running: `npm run build`.