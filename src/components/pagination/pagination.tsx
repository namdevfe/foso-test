'use client'

import { Button } from '@/components/button'
import { cn } from '@/utils'
import { useEffect, useMemo, useState } from 'react'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange?: (page: number) => void
}

const ELLIPSIS = '...'

const Pagination = ({
  totalPages = 0,
  currentPage = 1,
  onPageChange
}: PaginationProps) => {
  const [displayPages, setDisplayPages] = useState<(number | string)[]>([])

  const pages = useMemo(() => {
    const listPage: number[] = []
    for (let i = 1; i <= totalPages; i++) {
      listPage.push(i)
    }

    return listPage
  }, [totalPages])

  useEffect(() => {
    let tempPages: (number | string)[] = [...pages]

    if (
      (currentPage >= 1 && currentPage < 3) ||
      (currentPage >= totalPages - 2 && currentPage <= totalPages)
    ) {
      tempPages = [
        1,
        2,
        3,
        ELLIPSIS,
        totalPages - 2,
        totalPages - 1,
        totalPages
      ]
    } else if (currentPage === 3 || currentPage === 4) {
      tempPages = [
        ...tempPages.slice(currentPage - 2, currentPage + 1),
        ELLIPSIS,
        totalPages - 2,
        totalPages - 1,
        totalPages
      ]
    } else if (currentPage > 4 && currentPage < totalPages - 2) {
      const sliced1 = pages.slice(currentPage - 3, currentPage)
      const sliced2 = pages.slice(currentPage, currentPage + 1)
      tempPages = [
        1,
        2,
        ELLIPSIS,
        ...sliced1,
        ...sliced2,
        ELLIPSIS,
        totalPages - 1,
        totalPages
      ]
    }

    setDisplayPages(tempPages)
  }, [currentPage, pages, totalPages])

  const handlePageChange = (page: number | string) => {
    if (page === ELLIPSIS) {
      return
    }

    onPageChange?.(Number(page))
  }

  const handlePrevClick = () => {
    if (currentPage === 1) return
    handlePageChange(Number(currentPage) - 1)
  }

  const handleNextClick = () => {
    if (currentPage === totalPages) return
    handlePageChange(Number(currentPage) + 1)
  }

  return (
    <div
      className={cn(
        'layout-container flex flex-wrap items-center justify-between pt-5'
      )}
    >
      <Button
        className={cn('font-semibold')}
        variant='text'
        size='small'
        disabled={currentPage === 1}
        onClick={() => handlePrevClick()}
      >
        <svg
          width={18}
          height={16}
          viewBox='0 0 18 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M18 7.91008C18 8.109 17.921 8.29976 17.7803 8.44041C17.6397 8.58107 17.4489 8.66008 17.25 8.66008H2.56031L8.03062 14.1295C8.1003 14.1991 8.15558 14.2819 8.19329 14.3729C8.231 14.464 8.25041 14.5615 8.25041 14.6601C8.25041 14.7586 8.231 14.8562 8.19329 14.9473C8.15558 15.0383 8.1003 15.121 8.03062 15.1907C7.96094 15.2604 7.87821 15.3157 7.78717 15.3534C7.69612 15.3911 7.59854 15.4105 7.49999 15.4105C7.40145 15.4105 7.30387 15.3911 7.21282 15.3534C7.12178 15.3157 7.03905 15.2604 6.96937 15.1907L0.21937 8.44071C0.149637 8.37105 0.0943183 8.28834 0.0565751 8.19729C0.0188319 8.10624 -0.000595093 8.00865 -0.000595093 7.91008C-0.000595093 7.81152 0.0188319 7.71393 0.0565751 7.62288C0.0943183 7.53183 0.149637 7.44911 0.21937 7.37946L6.96937 0.62946C7.1101 0.488729 7.30097 0.409668 7.49999 0.409668C7.69902 0.409668 7.88989 0.488729 8.03062 0.62946C8.17135 0.77019 8.25041 0.961062 8.25041 1.16008C8.25041 1.35911 8.17135 1.54998 8.03062 1.69071L2.56031 7.16008H17.25C17.4489 7.16008 17.6397 7.2391 17.7803 7.37975C17.921 7.52041 18 7.71117 18 7.91008Z'
            fill='currentColor'
          />
        </svg>
        <span>Trang trước</span>
      </Button>

      {/* List pagination */}
      <div className={cn('flex items-center gap-[2px]')}>
        {displayPages.map((page, index) => {
          const isActive = page === currentPage

          return (
            <Button
              key={index}
              className={cn(
                'size-10 text-[#809FB8] font-semibold rounded-lg px-4 hover:text-primary',
                isActive &&
                  'bg-greenLight color text-[#052B1E] hover:text-[#052B1E]'
              )}
              variant='text'
              disabled={page === ELLIPSIS}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          )
        })}
      </div>

      <Button
        variant='text'
        size='small'
        className={cn('text-[#4D5F6E] hover:text-primary')}
        disabled={currentPage === totalPages}
        onClick={() => handleNextClick()}
      >
        <span>Trang sau</span>
        <svg
          width={18}
          height={16}
          viewBox='0 0 18 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.7806 8.44071L11.0306 15.1907C10.8899 15.3314 10.699 15.4105 10.5 15.4105C10.301 15.4105 10.1101 15.3314 9.96937 15.1907C9.82864 15.05 9.74958 14.8591 9.74958 14.6601C9.74958 14.4611 9.82864 14.2702 9.96937 14.1295L15.4397 8.66008H0.75C0.551088 8.66008 0.360322 8.58107 0.21967 8.44041C0.0790178 8.29976 0 8.109 0 7.91008C0 7.71117 0.0790178 7.52041 0.21967 7.37975C0.360322 7.2391 0.551088 7.16008 0.75 7.16008H15.4397L9.96937 1.69071C9.82864 1.54998 9.74958 1.35911 9.74958 1.16008C9.74958 0.961062 9.82864 0.77019 9.96937 0.62946C10.1101 0.488729 10.301 0.409668 10.5 0.409668C10.699 0.409668 10.8899 0.488729 11.0306 0.62946L17.7806 7.37946C17.8504 7.44911 17.9057 7.53183 17.9434 7.62288C17.9812 7.71393 18.0006 7.81152 18.0006 7.91008C18.0006 8.00865 17.9812 8.10624 17.9434 8.19729C17.9057 8.28834 17.8504 8.37105 17.7806 8.44071Z'
            fill='currentColor'
          />
        </svg>
      </Button>
    </div>
  )
}

export default Pagination
