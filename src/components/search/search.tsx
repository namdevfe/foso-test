'use client'

import { Button } from '@/components/button'
import { SearchIcon } from '@/components/icons'
import { cn } from '@/utils'
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'

interface SearchProps {
  onSubmit?: (value: string) => void
}

const Search = ({ onSubmit }: SearchProps) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const typingTimeoutRef = useRef<any>(null)

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      if (!!searchValue) {
        onSubmit?.(searchValue)
      }
    }, 300)
  }

  useEffect(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    }

    typingTimeoutRef.current = setTimeout(() => {
      if (!!searchValue) {
        onSubmit?.(searchValue)
      }
    }, 300)
  }, [searchValue, onSubmit])

  return (
    <form
      method='POST'
      className={cn(
        'h-[72px] w-full pr-2 flex items-center overflow-hidden rounded-xl shadow-sm bg-white'
      )}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        placeholder='Tìm kiếm bài viết'
        className={cn(
          'flex-1 h-full pt-6 pr-7 pb-6 pl-6  outline-none text-blackCustom placeholder:text-[#ACB3C7]'
        )}
        value={searchValue}
        onChange={(e) => handleSearchChange(e)}
      />
      <Button
        type='submit'
        className={cn('size-12 bg-[#15AA7A] text-white py-3')}
      >
        <SearchIcon />
      </Button>
    </form>
  )
}

export default Search
