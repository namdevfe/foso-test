'use client'

import { cn } from '@/utils'
import Link from 'next/link'
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode
    href?: string
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'text'
    size?: 'large' | 'medium' | 'small'
    rounded?: boolean
  }

const Button = ({
  children,
  href,
  variant = 'primary',
  rounded = false,
  size = 'medium',
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  let Comp: any = 'button'
  const internalProps: any = {}

  if (href) {
    Comp = Link
    internalProps.href = href
  }

  let variantClassNames: string = ''

  switch (variant) {
    case 'primary':
      variantClassNames = 'bg-primary text-[#052B1E] '
      break
    case 'secondary':
      variantClassNames =
        'bg-transparent text-white border-2 border-solid border-white'
      break
    case 'tertiary':
      variantClassNames = 'bg-tertiary text-menu'
      break
    case 'text':
      variantClassNames = 'bg-transparent'

    case 'outline':
      break

    default:
      break
  }

  let sizeClassNames: string = ''

  switch (size) {
    case 'large':
      sizeClassNames =
        'h-[50px] px-6 py-2 gap-8 text-sm leading-normal tracking-normal font-bold'
      break
    case 'medium':
      sizeClassNames =
        'h-[38px] py-2 px-3 text-sm leading-normal tracking-normal font-bold'
      break
    case 'small':
      sizeClassNames = 'h-6 gap-2'
      break

    default:
      break
  }

  return (
    <Comp
      className={cn(
        'w-fit flex items-center justify-center gap-3 rounded-xl transition-all duration-300 cursor-pointer',
        variantClassNames,
        sizeClassNames,
        rounded && 'rounded-[40px]',
        className,
        disabled && 'text-[#B3C5D4] pointer-events-none cursor-not-allowed'
      )}
      {...internalProps}
      {...props}
    >
      {children}
    </Comp>
  )
}

export default Button
