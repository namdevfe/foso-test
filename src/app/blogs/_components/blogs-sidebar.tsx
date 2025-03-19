'use client'

import { Search } from '@/components/search'
import { Sidebar } from '@/components/sidebar'
import { CATEGORIES } from '@/constants/blog-data'
import { cn } from '@/utils'
import Link from 'next/link'
import React from 'react'

const BlogsSidebar = () => {
  const handleSearch = (value: string) => {
    console.log('Call Api with value', value)
  }

  return (
    <Sidebar>
      <div className={cn('flex flex-col gap-6')}>
        <h2
          className={cn(
            'text-2xl leading-loose tracking-normal font-extrabold text-heading'
          )}
        >
          Tìm kiếm
        </h2>

        {/* Search Form */}
        <Search onSubmit={handleSearch} />
      </div>

      <div className={cn('flex flex-col gap-6')}>
        <h2
          className={cn(
            'text-2xl leading-loose tracking-normal font-extrabold text-heading capitalize'
          )}
        >
          Danh mục bài viết
        </h2>

        <ul className={cn('flex flex-col')}>
          {CATEGORIES.map((category) => (
            <li key={category.id} className={cn('flex w-full -mt-3')}>
              <Link
                href={`/blogs?${category}`}
                className={cn(
                  'w-full py-3 inline-flex items-center justify-between text-lg leading-normal tracking-normal group text-blackCustom'
                )}
              >
                <span
                  className={cn(
                    'transition-colors duration-300 group-hover:text-primary'
                  )}
                >
                  {category.title}
                </span>
                <span
                  className={cn(
                    'text-[#667F93] transition-colors duration-300 group-hover:text-primary'
                  )}
                >
                  {category.total}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Sidebar>
  )
}

export default BlogsSidebar
