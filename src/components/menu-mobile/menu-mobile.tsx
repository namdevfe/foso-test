'use client'

import { Button } from '@/components/button'
import {
  ArrowIcon,
  ChevronDownIcon,
  CloseIcon,
  VietnamIcon
} from '@/components/icons'
import { useMenuContext } from '@/components/menu-provider/menu-provider'
import { MENU_ITEMS } from '@/constants'

import { cn } from '@/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuMobile = () => {
  const pathname = usePathname()
  const { isShowMenuMobile, handleCloseMenuMobile } = useMenuContext()

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 z-[100] h-screen w-screen bg-white opacity-0 pointer-events-none transition-opacity duration-300',
        isShowMenuMobile && 'opacity-100 pointer-events-auto'
      )}
    >
      <Button
        className={cn('size-10 mt-4 ml-4')}
        onClick={() => handleCloseMenuMobile()}
      >
        <CloseIcon className={cn('text-white')} />
      </Button>
      <ul
        className={cn(
          'flex flex-col items-center justify-center h-full w-full'
        )}
      >
        {MENU_ITEMS.map((menuItem, index) => {
          const { text, href, hasChild } = menuItem || {}
          const isActive = href === pathname

          return (
            <li
              key={new Date().getTime() + index}
              className={cn(
                'w-full flex border-b border-solid border-gray-300 first:border-t'
              )}
            >
              <Link
                href={href}
                className={cn(
                  'flex items-center gap-2 p-6 text-menu text-sm leading-normal transition-all duration-300 hover:text-primary',
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

        <li className={cn('p-3 pt-4 w-full')}>
          <Button
            variant='tertiary'
            rounded
            className={cn('font-medium w-full')}
          >
            <VietnamIcon />
            <span className='flex items-center gap-1'>
              VI <ChevronDownIcon />
            </span>
          </Button>
        </li>
        <li className={cn('p-3 w-full')}>
          <Button rounded href='/blogs' className={cn('w-full')}>
            Trở thành khách hàng
            <span
              className={cn(
                'shrink-0 flex items-center justify-center size-3 bg-black rounded-full p-2'
              )}
            >
              <ArrowIcon />
            </span>
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default MenuMobile
