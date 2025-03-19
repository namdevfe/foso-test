import { Banner } from '@/components/banner'
import { Button } from '@/components/button'
import { ArrowIcon } from '@/components/icons'
import { cn } from '@/utils'
import Image from 'next/image'

interface SidebarProps {
  children?: React.ReactNode
  className?: string
}

const Sidebar = ({ children, className = '' }: SidebarProps) => {
  return (
    <aside className={cn('w-full lg:w-[366px] flex flex-col gap-8', className)}>
      {children}

      {/* Banners */}
      <div className={cn('flex flex-col gap-8')}>
        <Banner
          imageURL='/images/banner-sidebar-1.png'
          className={cn('py-[62px]')}
          imageWrapperClass={cn('h-[244px]')}
        >
          <Banner.Content className={cn('gap-[58px]')}>
            <div className={cn('flex items-center')}>
              <Image
                src='/images/robot.png'
                alt='Robot'
                width={136}
                height={136}
                priority
                quality={80}
              />
              <div className={cn('flex flex-col gap-3 pl-[9px]')}>
                <p
                  className={cn(
                    'text-xl leading-normal tracking-normal font-bold '
                  )}
                >
                  Miễn phí dùng thử
                </p>
                <Image
                  src='/images/mrp-logo.svg'
                  alt='MRP Logo'
                  width={154}
                  height={45}
                  priority
                  quality={80}
                />
              </div>
            </div>

            <Button
              variant='secondary'
              size='large'
              rounded
              className={cn('capitalize w-full justify-between')}
            >
              Tham gia ngay <ArrowIcon className={cn('size-[10px]')} />
            </Button>
          </Banner.Content>
        </Banner>

        <Banner imageURL='/images/banner-sidebar-02.png'>
          <Banner.Content>
            <p
              className={cn(
                'text-xl leading-normal tracking-normal text-white font-bold'
              )}
            >
              Gia nhập cộng đồng FMRP Việt – Kết nối, chia sẻ, cùng phát triển!
            </p>

            <Button
              variant='secondary'
              size='large'
              rounded
              className={cn('capitalize w-full justify-between')}
            >
              Tham gia ngay <ArrowIcon className={cn('size-[10px]')} />
            </Button>
          </Banner.Content>
        </Banner>
      </div>
    </aside>
  )
}

export default Sidebar
