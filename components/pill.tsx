import { cn } from '@/utils/cn';
import { ReactNode } from 'react';
import colors from 'tailwindcss/colors';
import type { DefaultColors } from 'tailwindcss/types/generated/colors';

export function Pill({
  children,
  className,
  color = 'blue',
  ...props
}: {
  children: ReactNode;
  className: string;
  color: keyof DefaultColors;
}) {
  return (
    <span
      className={cn(
        'relative inline-flex items-center rounded-full border-2 bg-primary-50 px-3 py-1 text-sm font-semibold text-white dark:bg-background-500',
        className
      )}
      style={{
        borderColor: colors[color]['500'],
        color: colors[color]['600'],
      }}
      {...props}
    >
      <span
        className='absolute left-1/2 h-full -translate-x-1/2 border-[1px] border-red-300'
        style={{
          borderColor: colors[color]['500'],
        }}
      ></span>
      <span
        className='pointer-events-none absolute right-0 z-[2] h-full w-1/2 rounded-r-full border-[1px] border-none opacity-20 outline-none'
        style={{
          background: `repeating-linear-gradient(45deg, transparent, transparent 2px,${colors[color]['500']} 2px,${colors[color]['500']} 3px)`,
        }}
      ></span>
      <span className='z-[1] bg-primary-50 dark:bg-background-500'>
        {children}
      </span>
    </span>
  );
}
