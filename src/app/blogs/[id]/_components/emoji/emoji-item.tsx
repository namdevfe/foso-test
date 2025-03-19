import { cn } from '@/utils'
import Image from 'next/image'
import { MouseEvent } from 'react'

export interface EmojiItemProps {
  icon: React.ReactNode
  count: number
  title: string
  currentIndex?: number
  isActive?: boolean
  onClick?: (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    index: number
  ) => void
}

const EmojiItem = ({
  icon,
  count = 0,
  title = '',
  currentIndex,
  isActive = false,
  onClick
}: EmojiItemProps) => {
  const handleItemClick = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    index: number
  ) => {
    onClick?.(e, index)
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center gap-1 w-[90px] overflow-hidden rounded bg-white p-1 cursor-pointer border border-solid border-transparent transition-all duration-300 group hover:border-[#10805B]',
        isActive && 'border-[#10805B] '
      )}
      onClick={(e) => currentIndex && handleItemClick(e, currentIndex)}
    >
      <Image
        src={(icon as string) || ''}
        alt='Emoji Icon'
        width={48}
        height={48}
      />
      <span
        className={cn(
          'font-bold transition-colors duration-300 group-hover:text-[#10805B]',
          isActive && 'text-[#10805B]'
        )}
      >
        {count}
      </span>
      <span
        className={cn(
          'text-sm transition-colors duration-300 group-hover:text-[#10805B]',
          isActive && 'text-[#10805B]'
        )}
      >
        {title}
      </span>
    </div>
  )
}

export default EmojiItem
