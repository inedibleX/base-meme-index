import React from 'react'
import { env } from '@/lib/env'

export const Footer = () => {
  return (
    <footer className="flex h-12 w-full flex-wrap items-center justify-center border-t md:h-24">
      © 2025 {env.NEXT_PUBLIC_APP_NAME}. All rights reserved.
    </footer>
  )
}
