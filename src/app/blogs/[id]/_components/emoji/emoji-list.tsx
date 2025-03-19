'use client'

import EmojiItem, {
  EmojiItemProps
} from '@/app/blogs/[id]/_components/emoji/emoji-item'
import { cn } from '@/utils'
import React, { MouseEvent, useState } from 'react'

const EMOJI_ITEMS: EmojiItemProps[] = [
  {
    title: 'Hữu ích',
    count: 1,
    icon: '/images/like-icon.svg'
  },
  {
    title: 'Yêu thích',
    count: 2,
    icon: '/images/heart-icon.svg'
  },
  {
    title: 'Thú vị',
    count: 0,
    icon: '/images/star-icon.svg'
  },
  {
    title: 'Bất ngờ',
    count: 1,
    icon: '/images/hushed-face-icon.svg'
  },
  {
    title: 'Nhàm chán',
    count: 0,
    icon: '/images/yawning-face-icon.svg'
  },
  {
    title: 'Tức giận',
    count: 0,
    icon: '/images/pouting-face-icon.svg'
  }
]

const EmojiList = () => {
  const [currentActive, setCurrentActive] = useState<number>()

  const handleEmojiClick = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    index: number
  ) => {
    e.stopPropagation()
    setCurrentActive(index)
  }

  return (
    <div className={cn('flex flex-col md:flex-row items-center gap-8')}>
      {EMOJI_ITEMS.map((item, index) => {
        return (
          <EmojiItem
            key={new Date().getDate() + index}
            {...{ ...item, currentIndex: index }}
            isActive={currentActive === index}
            onClick={handleEmojiClick}
          />
        )
      })}
    </div>
  )
}

export default EmojiList
