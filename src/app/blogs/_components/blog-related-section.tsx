import { BlogCard } from '@/components/blog-card'
import { BLOGS } from '@/constants/blog-data'
import { cn } from '@/utils'

const BlogRelatedSection = () => {
  return (
    <section className={cn('pt-12 pb-24')}>
      <div className={cn('layout-container')}>
        <h2
          className={cn('text-heading text-4xl font-extrabold capitalize mb-6')}
        >
          Bài viết liên quan
        </h2>

        <div className={cn('grid gap-8 grid-cols-1 lg:grid-cols-3')}>
          {BLOGS.slice(0, 3).map((blog, index) => {
            return (
              <BlogCard
                key={blog.id || new Date().getTime() + index}
                blog={blog}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BlogRelatedSection
