import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/ui/navigation-menu'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import React from 'react'
import { NavBarConnectWalletButton } from '@/app/_layout/nav-bar-connect-wallet-button'
import { Button } from '@/ui/button'
import Link from 'next/link'
import { Menu as MenuIcon } from 'lucide-react'

const menuItems = [
  { title: 'Discover', href: '/' },
  { title: 'Dashboard', href: '/' },
  { title: 'About', href: '/' },
  { title: '$GOAT', href: '/' },
]

export const Menu = ({ className }: { className?: string }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className={className}>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            <Link href={item.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={'rounded-lg px-4 py-2 hover:bg-gray-100'}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function MobileMenu({ className }: { className?: string }) {
  return (
    <Drawer>
      <DrawerTrigger asChild className={className}>
        <Button className={'bg-gray-100'} variant="ghost">
          <MenuIcon className={'size-8'} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mb-4">
        <DrawerHeader className="mx-auto">
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <div className="mx-auto">
          <Menu className="flex flex-col gap-2" />
        </div>
        <div className="mx-auto mt-4">
          <NavBarConnectWalletButton />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
