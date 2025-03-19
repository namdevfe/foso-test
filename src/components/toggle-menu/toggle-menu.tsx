'use client'

import { Button } from '@/components/button'
import { useMenuContext } from '@/components/menu-provider/menu-provider'
import { cn } from '@/utils'
import React from 'react'

const ToggleMenu = () => {
  const { handleToggleMenuMobile } = useMenuContext()

  return (
    <Button
      className={cn(
        'relative flex size-10 lg:hidden cursor-pointer rounded-sm px-1 before:absolute before:top-2 before:left-1 before:content-[""] before:block before:w-[calc(100%-4px*2)] before:h-[2px] before:bg-white after:absolute after:bottom-2 after:left-1 after:content-[""] after:block after:w-[calc(100%-4px*2)] after:h-[2px] after:bg-white'
      )}
      onClick={() => handleToggleMenuMobile()}
    >
      <span
        className={cn(
          'absolute top-2/4 -translate-y-2/4 left-1 block w-[calc(100%-4px*2)] h-[2px] bg-white'
        )}
      />
    </Button>
  )
}

export default ToggleMenu
