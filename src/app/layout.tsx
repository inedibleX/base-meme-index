import '@/app/_styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'

import type { Metadata } from 'next'
import { Fredoka, Geist, Geist_Mono } from 'next/font/google'
import { headers } from 'next/headers'
import { Toaster } from 'sonner'
import { cookieToInitialState } from 'wagmi'

import { Footer } from '@/app/_layout/footer'
import { NavBar } from '@/app/_layout/nav-bar'
import { Providers } from '@/app/_layout/providers'
import { env } from '@/lib/env'
import { config } from '@/lib/wagmi.config'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: env.NEXT_PUBLIC_APP_NAME,
  icons: [
    {
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      sizes: '192x192',
      type: 'image/png',
      url: '/favicon-192x192.png',
    },
    {
      rel: 'icon',
      sizes: '512x512',
      type: 'image/png',
      url: '/favicon-512x512.png',
    },
  ],
  appleWebApp: {
    capable: true,
    title: env.NEXT_PUBLIC_APP_NAME,
    statusBarStyle: 'default',
  },
}

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode
  }>,
) {
  const headersList = await headers()
  const initialState = cookieToInitialState(config, headersList.get('cookie'))

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} min-h-screen bg-gradient-to-b from-sky-400 to-blue-500 text-slate-800 antialiased`}
      >
        <Providers initialState={initialState}>
          <div className={'flex min-h-screen flex-col'}>
            <NavBar />
            <div className="container mx-auto mt-8 grow px-4">
              {props.children}
            </div>
            <Footer />
          </div>
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
