import { BlogPageComponent } from '@/app/blogs/_components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bài viết',
  description: 'Danh sách bài viết mới cập nhật của FOSO'
}

const BlogsPage = () => {
  return <BlogPageComponent />
}

export default BlogsPage
