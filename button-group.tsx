import { Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showText = true,
  size = 'md',
}: {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}) {
  const box = size === 'sm' ? 'size-7' : size === 'lg' ? 'size-10' : 'size-9'
  const icon = size === 'sm' ? 'size-3.5' : size === 'lg' ? 'size-5' : 'size-4.5'
  const text = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl'

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div className={cn('grid place-items-center rounded-xl bg-primary text-primary-foreground', box)}>
        <Zap className={cn('fill-current', icon)} />
      </div>
      {showText && <span className={cn('font-semibold tracking-tight text-foreground', text)}>Clutch</span>}
    </div>
  )
}
