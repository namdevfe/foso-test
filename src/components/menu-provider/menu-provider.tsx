'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface MenuContext {
  isShowMenuMobile: boolean
  handleToggleMenuMobile: () => void
  handleCloseMenuMobile: () => void
}

const MenuContext = createContext<MenuContext>({
  isShowMenuMobile: false,
  handleCloseMenuMobile: () => {},
  handleToggleMenuMobile: () => {}
})

export const useMenuContext = () => {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error('useMenuContext must be used within MenuProvider')
  }

  return context
}

interface MenuProviderProps {
  children: React.ReactNode
}

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isShowMenuMobile, setIsShowMenuMobile] = useState<boolean>(false)

  // Hanlde close menu mobile when user resize to breakpoint larger or equal 1024 pixel
  useEffect(() => {
    const handleResizeWindow = () => {
      if (window.innerWidth >= 1024) {
        handleCloseMenuMobile()
      }
    }

    window.addEventListener('resize', handleResizeWindow)

    return () => {
      window.removeEventListener('resize', handleResizeWindow)
    }
  }, [])

  const handleToggleMenuMobile = () => {
    setIsShowMenuMobile((prev) => !prev)
  }

  const handleCloseMenuMobile = () => {
    setIsShowMenuMobile(false)
  }

  return (
    <MenuContext.Provider
      value={{
        isShowMenuMobile,
        handleCloseMenuMobile,
        handleToggleMenuMobile
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuProvider
