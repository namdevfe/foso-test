export interface MenuItem {
  text: string
  href: string
  hasChild?: boolean
}

export const MENU_ITEMS: MenuItem[] = [
  {
    text: 'Về chúng tôi',
    href: '/about'
  },
  {
    text: 'Giải pháp',
    href: '/solutions',
    hasChild: true
  },
  {
    text: 'Tài nguyên',
    href: '/blogs',
    hasChild: true
  },
  {
    text: 'Liên hệ',
    href: '/contact'
  }
]
