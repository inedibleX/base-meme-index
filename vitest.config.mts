import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { loadEnv } from '@wagmi/cli'

const env = loadEnv({
  mode: process.env.NODE_ENV,
  envDir: process.cwd(),
})

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    globals: true,
    env,
    setupFiles: ['./src/test/setup.ts'],
  },
})
