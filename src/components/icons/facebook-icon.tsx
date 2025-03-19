import { IconProps } from '@/types'
import { cn } from '@/utils'

const FacebookIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      width={12}
      height={18}
      viewBox='0 0 12 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        d='M12 0.00012207H9C6.23858 0.00012207 4 2.2387 4 5.00012V7.00012H0V11.0001H4V18.0001H8V11.0001H12V7.00012H8V5.00012C8 4.44784 8.44771 4.00012 9 4.00012H12V0.00012207Z'
        fill='#15AA7A'
      />
    </svg>
  )
}

export default FacebookIcon
