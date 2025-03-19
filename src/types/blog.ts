export interface Blog {
  id: string
  imageURL: string
  tag: string
  title: string
  postedAt: string
  readTime: string
}

export interface Category {
  id: string
  title: string
  total: number
}
