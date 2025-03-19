import { Button } from '@/components/button'
import { CalendarIcon, ClockIcon } from '@/components/icons'
import { Tag } from '@/components/tag'
import { Blog } from '@/types'
import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

interface BlogCardProps {
  blog: Blog
}

const BlogCard = ({ blog }: BlogCardProps) => {
  const { id, tag, imageURL, postedAt, readTime, title } = blog

  const link = `/blogs/${id}`
  const postedDate = new Date(postedAt)
  const day = postedDate.getDay()
  const month = postedDate.getMonth() + 1
  const year = postedDate.getFullYear()

  const formattedPostDate = `${
    day < 10 ? day.toString().padStart(2, '0') : day.toString()
  }/${month}/${year}`

  return (
    <figure
      className={cn('w-full rounded-ss-3xl rounded-se-3xl overflow-hidden')}
    >
      <Link
        href={link}
        className={cn('flex w-full aspect-[505/475] rounded-3xl')}
      >
        <Image
          src={imageURL}
          alt={title}
          width={505}
          height={475}
          priority
          quality={80}
          className={cn('w-full h-full object-cover')}
        />
      </Link>

      <div className={cn('flex flex-col gap-4 bg-whiteCustom pt-6')}>
        <Tag>{tag}</Tag>

        {/* Title */}
        <h3
          className={cn(
            'h-[73px] text-2xl leading-normal tracking-normal text-blackCustom truncate line-clamp-2 text-wrap font-extrabold transition-colors duration-300 hover:text-primary'
          )}
        >
          <Link href={link}>
            Tại sao BOM quan trọng trong quản lý sản xuất?
          </Link>
        </h3>

        {/* Time to read */}
        <div className={cn('flex items-center')}>
          <div
            className={cn(
              'flex items-center gap-2 text-base text-[#667F93] leading-normal tracking-tighter pr-3'
            )}
          >
            <CalendarIcon />
            <span>{formattedPostDate}</span>
          </div>

          <div
            className={cn(
              'flex items-center gap-2 text-base text-[#667F93] leading-normal tracking-tighter pl-3 border-l-[1px] border-[#D9E1E7]'
            )}
          >
            <ClockIcon />
            <span>{`${readTime} phút đọc`}</span>
          </div>
        </div>

        <Button
          variant='text'
          className={cn(
            'pl-0 gap-4 h-12 text-[#667F93] text-lg leading-normal tracking-normal font-semibold hover:text-primary'
          )}
        >
          Khám phá thêm
          <svg
            width={18}
            height={16}
            viewBox='0 0 18 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className=''
          >
            <path
              d='M17.7806 8.94071L11.0306 15.6907C10.8899 15.8314 10.699 15.9105 10.5 15.9105C10.301 15.9105 10.1101 15.8314 9.96937 15.6907C9.82864 15.55 9.74958 15.3591 9.74958 15.1601C9.74958 14.9611 9.82864 14.7702 9.96937 14.6295L15.4397 9.16008H0.75C0.551088 9.16008 0.360322 9.08107 0.21967 8.94042C0.0790178 8.79976 0 8.609 0 8.41008C0 8.21117 0.0790178 8.02041 0.21967 7.87975C0.360322 7.7391 0.551088 7.66008 0.75 7.66008H15.4397L9.96937 2.19071C9.82864 2.04998 9.74958 1.85911 9.74958 1.66008C9.74958 1.46106 9.82864 1.27019 9.96937 1.12946C10.1101 0.988729 10.301 0.909668 10.5 0.909668C10.699 0.909668 10.8899 0.988729 11.0306 1.12946L17.7806 7.87946C17.8504 7.94911 17.9057 8.03183 17.9434 8.12288C17.9812 8.21393 18.0006 8.31152 18.0006 8.41008C18.0006 8.50865 17.9812 8.60624 17.9434 8.69729C17.9057 8.78834 17.8504 8.87105 17.7806 8.94071Z'
              fill='currentColor'
            />
          </svg>
        </Button>
      </div>
    </figure>
  )
}

export default BlogCard
