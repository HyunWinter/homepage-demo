import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import Link from 'next/link'

export const AppStoreButton = ({ className }: { className?: string }) => {
  return (
    <Button
      asChild
      size="lg"
      className={cn('rounded-xl px-5 text-base', className)}
    >
      <Link href="#link">
        <span className="text-nowrap">App Store</span>
      </Link>
    </Button>
  )
}