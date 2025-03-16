import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className='flex gap-x-2 items-center'>
      <Image src="/logo.webp" alt="Lingovo Logo" width={150} height={50} className={cn('size-7 w-7', className)} />
      <span className='text-balance text-xl font-medium'>Linvago</span>
    </div>
  )
}
