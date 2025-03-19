import { cn } from '@/utils'

interface TagProps {
  children: React.ReactNode
}

const Tag = ({ children }: TagProps) => {
  return (
    <div
      className={cn(
        'w-fit py-1 px-2 rounded-lg bg-[#E2F0FE] text-xs leading-normal tracking-normal capitalize text-[#0F4F9E]'
      )}
    >
      {children}
    </div>
  )
}

export default Tag
