import { cn } from '@/utils'
import './breadcrumb.css'

interface BreadcrumbProps {
  children: React.ReactNode
}

const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return <ul className={cn('breadcrumb')}>{children}</ul>
}

interface BreadcrumbItemProps {
  children: React.ReactNode
  isActive?: boolean
}
const BreadcrumbItem = ({ children, isActive }: BreadcrumbItemProps) => {
  return (
    <li className={cn('breadcrumb-item', isActive && '--active')}>
      {children}
    </li>
  )
}

Breadcrumb.Item = BreadcrumbItem

export default Breadcrumb
