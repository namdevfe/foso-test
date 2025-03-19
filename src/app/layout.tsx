import { Header } from '@/components/header'
import { MenuMobile } from '@/components/menu-mobile'
import { MenuProvider } from '@/components/menu-provider'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import '@/styles/globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-raleway'
})

export const metadata: Metadata = {
  title: {
    template: '%s | FOSO',
    default: 'FOSO'
  },
  description: 'This website is built by Nguyễn Kim Quốc Nam'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={raleway.variable} suppressHydrationWarning>
        <MenuProvider>
          <Header />
          <MenuMobile />
          {children}
        </MenuProvider>
      </body>
    </html>
  )
}
