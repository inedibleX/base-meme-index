import React from 'react'

import { NavBarConnectWalletButton } from '@/app/_layout/nav-bar-connect-wallet-button'

const NavBarDesktop = () => {
  return (
    <div className="fixed top-0 z-10 w-full bg-white py-2">
      <div className="container mx-auto flex h-[36px] max-w-6xl items-center justify-between px-4">
        <div>Base Meme Index</div>
        <NavBarConnectWalletButton />
      </div>
    </div>
  )
}

const NavBarMobile = () => {
  return (
    <div className="fixed top-0 z-10 flex h-14 w-full items-center justify-between bg-white px-4 lg:hidden">
      <div>Base Meme Index</div>
      <NavBarConnectWalletButton />
    </div>
  )
}

export const NavBar = () => {
  return (
    <>
      <NavBarDesktop />
      <NavBarMobile />
    </>
  )
}
