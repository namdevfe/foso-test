import { IconProps } from '@/types'
import { cn } from '@/utils'

const CloseIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className={cn(className)}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18 18 6M6 6l12 12'
        // fill='currentColor'
      />
    </svg>
  )
}

export default CloseIcon
