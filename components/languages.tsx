import { cn } from '@/lib/utils'
import { ChevronsUpDown } from 'lucide-react'

export const Languages = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative', className)} >
      <ChevronsUpDown className="pointer-events-none absolute inset-y-0 right-2 my-auto opacity-75" size="0.75rem" />
      <select
        className={cn(
          'border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground shadow-xs flex h-9 w-full min-w-32 appearance-none rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
        )}
        name="language">
        <option value="1">English</option>
        <option value="2">Espanol</option>
        <option value="3">Français</option>
        <option value="4">Swahili</option>
        <option value="5">Lingala</option>
      </select>
    </div>
  )
}