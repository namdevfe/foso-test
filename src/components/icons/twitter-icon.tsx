import { IconProps } from '@/types'
import { cn } from '@/utils'

const TwitterIcon = ({ className = '' }: IconProps) => {
  return (
    <svg
      width={22}
      height={21}
      viewBox='0 0 22 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(className)}
    >
      <path
        d='M17.3263 0.904053H20.6998L13.3297 9.32755L22 20.79H15.2112L9.89404 13.8381L3.80995 20.79H0.434432L8.31743 11.7801L0 0.904053H6.96111L11.7674 7.25838L17.3263 0.904053ZM16.1423 18.7708H18.0116L5.94539 2.81718H3.93946L16.1423 18.7708Z'
        fill='#15AA7A'
      />
    </svg>
  )
}

export default TwitterIcon
