import { BlogCard } from '@/components/blog-card'
import { Button } from '@/components/button'
import { ArrowIcon } from '@/components/icons'
import { BLOGS } from '@/constants/blog-data'
import { cn } from '@/utils'
import Image from 'next/image'
import React from 'react'

const BlogSection = () => {
  return (
    <section className={cn('w-full relative')}>
      <h2
        className={cn(
          'text-heading text-4xl leading-loose tracking-normal font-extrabold'
        )}
      >
        Tất cả bài viết
      </h2>

      {/* Banner */}
      <div
        className={cn(
          'relative flex-col gap-8 z-10 p-6 md:block md:pt-[60px] md:pl-[59px] md:pb-[49px] mb-12 h-auto md:h-[318px] overflow-hidden rounded-[40px] flex md:flex-row items-center before:content-[""] before:block before:absolute before:left-0 before:top-0 before:z-10 before:w-full before:h-full before:bg-gradient-blue'
        )}
      >
        <div
          className={cn(
            'static w-full aspect-auto md:w-[472px] md:absolute top-0 right-0 bottom-0 z-[10] h-full before:'
          )}
        >
          <Image
            src='/images/banner-01.png'
            alt='banner'
            width={472}
            height={400}
            className={cn('w-full h-full object-cover')}
            priority
            quality={80}
          />
        </div>
        <div className={cn('z-10 max-w-[376px] relative')}>
          <p className={cn('text-4xl text-white font-bold mb-8')}>
            Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
          </p>
          <Button
            variant='secondary'
            size='large'
            rounded
            className={cn('w-full md:w-fit')}
          >
            Tham gia ngay <ArrowIcon className={cn('size-[10px]')} />
          </Button>
        </div>
      </div>

      {/* Blog list */}
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 pb-[72px]'
        )}
      >
        {BLOGS.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Blur*/}
      <Image
        src='/images/blur.png'
        alt='Blur Background'
        width={500}
        height={500}
        priority
        quality={80}
        className={cn('absolute -top-[16%] -left-2/4 -z-[1]')}
      />

      {/* Blur*/}
      <Image
        src='/images/blur-right.png'
        alt='Blur Background'
        width={500}
        height={500}
        priority
        quality={80}
        className={cn('absolute -bottom-[16%] -right-2/4 -z-[1]')}
      />
    </section>
  )
}

export default BlogSection
