'use client'

import { Button } from '@/components/button'
import { Sidebar } from '@/components/sidebar'
import { cn } from '@/utils'
import { useState } from 'react'
import BlogDetailTOC from './blog-detail-toc'

const BlogDetailSidebar = () => {
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(true)

  const handleToggleDropdown = () => {
    setIsShowDropdown((prev) => !prev)
  }

  return (
    <Sidebar
      className={cn(
        'static lg:w-full xl:w-[492px] xl:sticky top-[calc(80px+32px+24px)]'
      )}
    >
      <div className={cn('flex flex-col gap-6')}>
        <div className={cn('flex items-center justify-between')}>
          <h2
            className={cn(
              'text-2xl leading-loose tracking-normal font-extrabold capitalize text-heading'
            )}
          >
            Nội dung bài viết
          </h2>
          <Button
            variant='text'
            className={cn(
              'size-6 p-0 transition-transform duration-300 rotate-180',
              isShowDropdown && 'rotate-360'
            )}
            onClick={handleToggleDropdown}
          >
            <svg
              width={18}
              height={11}
              viewBox='0 0 18 11'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.2959 10.2059C17.1914 10.3108 17.0672 10.394 16.9304 10.4508C16.7937 10.5076 16.6471 10.5368 16.499 10.5368C16.351 10.5368 16.2043 10.5076 16.0676 10.4508C15.9309 10.394 15.8067 10.3108 15.7021 10.2059L8.99996 3.50376L2.2959 10.2059C2.08455 10.4173 1.79791 10.536 1.49902 10.536C1.20014 10.536 0.913491 10.4173 0.702147 10.2059C0.490802 9.9946 0.37207 9.70796 0.37207 9.40907C0.37207 9.11019 0.490803 8.82354 0.702147 8.6122L8.20215 1.1122C8.30666 1.00732 8.43086 0.924102 8.5676 0.867321C8.70435 0.810539 8.85096 0.781311 8.99902 0.781311C9.14709 0.781311 9.2937 0.810539 9.43044 0.867321C9.56719 0.924102 9.69138 1.00732 9.7959 1.1122L17.2959 8.6122C17.4008 8.71671 17.484 8.84091 17.5408 8.97765C17.5976 9.1144 17.6268 9.26101 17.6268 9.40907C17.6268 9.55714 17.5976 9.70375 17.5408 9.84049C17.484 9.97724 17.4008 10.1014 17.2959 10.2059Z'
                fill='#15AA7A'
              />
            </svg>
          </Button>
        </div>

        {/* Dropdown */}
        {isShowDropdown && <BlogDetailTOC />}
      </div>
    </Sidebar>
  )
}

export default BlogDetailSidebar
