import { Breadcrumb } from '@/components/breadcrumb'
import { ChevronDownIcon } from '@/components/icons'
import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className={cn('relative z-20 max-h-[1080px] min-h-[392px] pb-36')}>
      <div className={cn('layout-container')}>
        <div className={cn('max-w-[1280px] mx-auto')}>
          {/* Breadcrumb */}
          <div
            className={cn(
              'flex items-center justify-start md:justify-center mb-12 md:mb-[72px]'
            )}
          >
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link href='/'>Trang chủ</Link>
                <ChevronDownIcon className={cn('-rotate-90 w-2')} />
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href='/resources'>Tài nguyên</Link>
                <ChevronDownIcon className={cn('-rotate-90 w-2')} />
              </Breadcrumb.Item>
              <Breadcrumb.Item isActive>Blog</Breadcrumb.Item>
            </Breadcrumb>
          </div>

          {/* Textbox */}
          <div
            className={cn(
              'flex flex-col items-center justify-center gap-2 text-left md:text-center'
            )}
          >
            <h1 className={cn('text-[64px] leading-normal text-[#050505]')}>
              Blog{' '}
              <span className={cn('text-gradient font-extrabold')}>FOSO</span>
              - <br />
              Cập Nhật Tin Tức{' '}
              <span
                className={cn(
                  'relative inline-block font-extrabold after:content-[""] after:block after:h-7 after:absolute after:left-0 after:rounded-[40px] after:top-2/4 after:-z-[1] after:w-full after:bg-greenLight after:translate-y-2'
                )}
              >
                Mới Nhất
              </span>
            </h1>
            <p className={cn('text-lg leading-normal')}>
              Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
            </p>
          </div>
        </div>
      </div>

      {/* Images */}
      <div
        className={cn(
          'hidden xl:flex absolute top-0 left-[43px] right-[63px] -z-[1] items-center justify-between translate-y-2/4'
        )}
      >
        <Image
          src='/images/img-calendar.png'
          alt='calendar-img'
          width={195}
          height={188}
          priority
          quality={80}
        />

        <Image
          src='/images/img-hand.png'
          alt='hand-img'
          width={195}
          height={159}
          priority
          quality={80}
        />
      </div>
    </section>
  )
}

export default HeroSection
