import { cn } from '@/utils'
import Image from 'next/image'

interface AuthorProps {
  imageURL?: string
  name: string
}

const Author = ({ imageURL = '', name = '' }: AuthorProps) => {
  return (
    <div className={cn('flex items-center gap-3')}>
      <div
        className={cn(
          'flex overflow-hidden size-16 aspect-square rounded-full border border-[#f1f5f7] shadow'
        )}
      >
        <Image
          src={imageURL}
          alt='Author'
          width={64}
          height={64}
          priority
          quality={100}
          className={cn('w-full h-full object-cover')}
        />
      </div>

      <div>
        <p
          className={cn(
            'text-sm leading-normal tracking-normal text-[#667F93]'
          )}
        >
          Tác giả
        </p>
        <p className={cn('font-bold capitalize')}>{name}</p>
      </div>
    </div>
  )
}

export default Author
