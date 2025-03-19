import { Button } from '@/components/button'
import Menu from '@/components/header/menu'
import {
  ArrowIcon,
  ChevronDownIcon,
  LogoIcon,
  VietnamIcon
} from '@/components/icons'
import { ToggleMenu } from '@/components/toggle-menu'
import { cn } from '@/utils'
import Link from 'next/link'

const Header = () => {
  return (
    <header
      className={cn(
        'fixed top-8 left-4 right-4 z-50 mx-auto xl:left-48 xl:right-48 h-header max-w-[calc(100%-(16px*2))] lg:max-w-[1280px] py-3 px-9 bg-white rounded-[40px] flex items-center justify-between 2xl:left-80 2xl:right-80 shadow'
      )}
    >
      {/* Toggle menu mobile button */}
      <ToggleMenu />

      {/* Logo */}
      <Link href='/' className={cn('flex')}>
        <LogoIcon />
      </Link>

      <Menu />

      {/* Actions */}
      <div className={cn('hidden md:flex items-center gap-2')}>
        <Button variant='tertiary' rounded className={cn('font-medium')}>
          <VietnamIcon />
          <span className='flex items-center gap-1'>
            VI <ChevronDownIcon />
          </span>
        </Button>

        <Button rounded href='/blogs'>
          Trở thành khách hàng
          <span
            className={cn(
              'shrink-0 flex items-center justify-center size-3 bg-black rounded-full p-2'
            )}
          >
            <ArrowIcon />
          </span>
        </Button>
      </div>
    </header>
  )
}

export default Header
