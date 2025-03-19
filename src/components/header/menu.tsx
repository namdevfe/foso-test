'use client'

import { ChevronDownIcon } from '@/components/icons'
import { MENU_ITEMS } from '@/constants'
import { cn } from '@/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Menu = () => {
  const pathname = usePathname()

  return (
    <ul className={cn('hidden lg:flex items-center')}>
      {MENU_ITEMS.map((menuItem, index) => {
        const { text, href, hasChild } = menuItem || {}
        const isActive = href === pathname

        return (
          <li key={new Date().getTime() + index} className={cn('flex')}>
            <Link
              href={href}
              className={cn(
                'inline-flex items-center gap-2 p-2 text-menu text-sm leading-normal transition-all duration-300 hover:text-primary',
                isActive && 'font-bold'
              )}
            >
              <span
                className={cn(
                  'relative  after:content-[""] after:absolute after:top-[calc(100%+2px)] after:left-2/4 after:hidden after:size-[6px] after:bg-primary after:rounded-full after:-translate-x-2/4',
                  isActive && 'after:block'
                )}
              >
                {text}
              </span>
              {hasChild && <ChevronDownIcon />}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
