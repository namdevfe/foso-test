import BannerContent from '@/components/banner/banner-content'
import { cn } from '@/utils'
import Image from 'next/image'

interface BannerProps {
  imageURL: string
  children: React.ReactNode
  className?: string
  imageWrapperClass?: string
  contentClass?: string
}

const Banner = ({
  imageURL,
  children,
  className = '',
  imageWrapperClass = ''
}: BannerProps) => {
  return (
    <div
      className={cn(
        'flex flex-col w-full h-[650px] pt-[37px] overflow-hidden text-white rounded-3xl bg-gradient-blue',
        className
      )}
    >
      <div className={cn('w-full h-[400px]', imageWrapperClass)}>
        <Image
          src={imageURL}
          alt='Banner'
          width={472}
          height={400}
          className={cn('w-full h-full object-cover')}
        />
      </div>

      {children}
    </div>
  )
}

Banner.Content = BannerContent

export default Banner
