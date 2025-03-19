import { cn } from '@/utils'

interface BannerContentProps {
  children?: React.ReactNode
  className?: string
}

const BannerContent = ({ children, className = '' }: BannerContentProps) => {
  return (
    <div className={cn('p-6 flex flex-col gap-6 text-left', className)}>
      {children}
    </div>
  )
}

export default BannerContent
