import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import Link from 'next/link'

export const GooglePlayButton = ({ className }: { className?: string }) => {
  return (
    <Button
      asChild
      size="lg"
      variant="outline"
      className={cn('h-10.5 rounded-xl px-5', className)}
    >
      <Link href="/">
        Google Play
        {/* <span className="text-nowrap">Google Play</span> */}
      </Link>
    </Button>
  )
}