import React from 'react'
import { Menu, MobileMenu } from '@/app/_layout/menu'
import { NavBarConnectWalletButton } from '@/app/_layout/nav-bar-connect-wallet-button'

const NavBarDesktop = () => {
  return (
    <div
      className={
        'container mx-auto mt-4 hidden max-w-6xl items-center justify-between px-4 md:flex'
      }
    >
      <div>DAPP</div>
      <div className={'grow px-4'}>
        <Menu />
      </div>
      <NavBarConnectWalletButton />
    </div>
  )
}

const NavBarMobile = () => {
  return (
    <div className="fixed top-0 flex h-14 w-full items-center justify-between bg-white px-4 md:hidden">
      <MobileMenu />
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
