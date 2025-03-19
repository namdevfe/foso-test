'use client'

import { cn } from '@/utils'
import Link from 'next/link'
import { Fragment, useState } from 'react'

const SECTIONS: BlogDetailTOCItemProps[] = [
  {
    href: '#section-1',
    title: '1. Quy trình 5S là gì?'
  },
  {
    href: '#section-2',
    title: '2. Lợi ích quy trình 5S đem lại'
  },
  {
    href: '#section-3',
    title: '3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?',
    items: [
      {
        href: '#section-3-1',
        title: '3.1 Cải thiện rõ nét môi trường làm việc'
      },
      {
        href: '#section-3-2',
        title: '3.2 Tiết kiệm thời gian đáng kể'
      },
      {
        href: '#section-3-3',
        title: '3.3 Tăng năng suất làm việc'
      },
      {
        href: '#section-3-4',
        title: '3.4 Tiết kiệm chi phí'
      },
      {
        href: '#section-3-5',
        title: '3.5 Tăng chất lượng sản phẩm'
      }
    ]
  },
  {
    href: '#section-4',
    title: '4. Quy trình 5S gồm các bước',
    items: [
      {
        href: '#section-4-1',
        title: '4.1 Seiri (Ngăn nắp)'
      },
      {
        href: '#section-4-2',
        title: '4.2 Seiton (Sắp xếp)'
      },
      {
        href: '#section-4-3',
        title: '4.3 Seiso (Vệ sinh)'
      },
      {
        href: '#section-4-4',
        title: '4.4 Seiketsu (Tiêu chuẩn hóa)'
      },
      {
        href: '#section-4-5',
        title: '4.5 Shitsuke (Kỷ luật)'
      }
    ]
  },
  {
    href: '#section-5',
    title: '5. Quy trình được thực hiện như sau:',
    items: [
      {
        href: '#section-5-1',
        title: '5.1 Giai đoạn chuẩn bị'
      },
      {
        href: '#section-5-2',
        title: '5.2 Triển khai rộng rãi'
      },
      {
        href: '#section-5-3',
        title: '5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp'
      },
      {
        href: '#section-5-4',
        title: '5.4 Sàng lọc, sắp xếp và đánh giá'
      },
      {
        href: '#section-5-5',
        title: '5.5 Đánh giá'
      }
    ]
  },
  {
    href: '#section-6',
    title: '6. Quy trình 5S có giống với Kaizen?'
  },
  {
    href: '#section-7',
    title: '7. Đối tượng nào nên áp dụng 5S?'
  },
  {
    href: '#section-8',
    title: '8. Các yếu tố tạo nên thành công cho quy trình 5S'
  }
]

const BlogDetailTOC = () => {
  const [currentSection, setCurrentSection] = useState<string>('')

  const handleItemClick = (href: string) => {
    setCurrentSection(href)
  }

  const renderItems = (items: BlogDetailTOCItemProps[]) => {
    return (
      <ul className='blog-detail-toc'>
        {items.map((item) => {
          return (
            <BlogDetailTOCItem
              key={item.href}
              href={item.href}
              title={item.title}
              items={item.items}
              isActive={item.href === currentSection}
              onClick={() => handleItemClick(item.href)}
            />
          )
        })}
      </ul>
    )
  }

  return (
    <ul className='blog-detail-toc'>
      {SECTIONS.map((section) => {
        return (
          <Fragment key={section.href}>
            <BlogDetailTOCItem
              {...section}
              isActive={section.href === currentSection}
              onClick={() => {
                handleItemClick(section.href)
              }}
            />

            {section.items &&
              section.items.length > 0 &&
              renderItems(section.items)}
          </Fragment>
        )
      })}
    </ul>
  )
}

interface BlogDetailTOCItemProps {
  href: string
  title: string
  isActive?: boolean
  items?: BlogDetailTOCItemProps[]
  onClick?: (href: string) => void
}

const BlogDetailTOCItem = ({
  href,
  title,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  items = [],
  isActive = false,
  onClick
}: BlogDetailTOCItemProps) => {
  return (
    <li className={cn('flex flex-col')}>
      <Link
        href={href}
        className={cn(
          'text-lg py-1 transition-colors duration-300 hover:text-primary',
          isActive && 'text-primary'
        )}
        onClick={() => {
          onClick?.(href)
        }}
      >
        {title}
      </Link>
    </li>
  )
}

export default BlogDetailTOC
