import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

type CalloutType = 'info' | 'success' | 'warning' | 'error';

export function Callout({
  type = 'info',
  title,
  className,
  children,
}: {
  type: CalloutType;
  title?: ReactNode | string;
  className?: string;
  children: ReactNode;
}) {
  const stylesByType: Record<CalloutType, any> = {
    info: 'bg-sky-400 text-sky-700',
    success: 'bg-lime-400 text-lime-700',
    warning: 'bg-amber-300 text-amber-700',
    error: 'bg-red-400 text-red-700',
  };

  return (
    <div
      className={cn(
        'callout',
        'my-12 flex flex-col rounded p-4',
        stylesByType[type],
        className
      )}
    >
      {title && <b className='mb-2'>{title}</b>}

      <div>{children}</div>
    </div>
  );
}
