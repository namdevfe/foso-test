import { Button } from '@/components/button'
import {
  FacebookIcon,
  LinkedInIcon,
  RedditIcon,
  TwitterIcon,
  ZaloIcon
} from '@/components/icons'
import { cn } from '@/utils'
import React from 'react'

const SOCIAL_ITEMS: { icon: React.ReactNode }[] = [
  {
    icon: <ZaloIcon />
  },
  {
    icon: <FacebookIcon />
  },
  {
    icon: <TwitterIcon />
  },
  {
    icon: <LinkedInIcon />
  },
  {
    icon: <RedditIcon />
  }
]

const SocialList = () => {
  return (
    <div
      className={cn(
        'fixed z-50 bottom-4 right-4 min-[1920px]:top-[250px] min-[1920px]:left-[91px] flex flex-col gap-2'
      )}
    >
      <p
        className={cn(
          'font-extrabold text-base leading-normal tracking-normal'
        )}
      >
        Chia sẻ
      </p>

      {SOCIAL_ITEMS.map(({ icon }, index) => (
        <Button
          key={new Date().getTime() + index}
          className={cn(
            'size-12 rounded-2xl border border-solid border-[#15AA7A] bg-white'
          )}
        >
          {icon}
        </Button>
      ))}
    </div>
  )
}

export default SocialList
