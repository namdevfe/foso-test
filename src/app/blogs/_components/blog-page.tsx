'use client'

import { BlogsSidebar, HeroSection } from '@/app/blogs/_components'
import BlogSection from '@/app/blogs/_components/blog-section'
import { Pagination } from '@/components/pagination'
import { cn } from '@/utils'
import { useState } from 'react'

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <main className={cn('pt-[calc(80px+32px+24px)] h-[2000px]')}>
      <HeroSection />
      <div
        className={cn(
          'layout-container text-white flex flex-col-reverse lg:flex-row items-start gap-8'
        )}
      >
        <BlogSection />
        <BlogsSidebar />
      </div>

      <Pagination
        currentPage={currentPage || 1}
        totalPages={10}
        onPageChange={handlePageChange}
      />
    </main>
  )
}

export default BlogPage
