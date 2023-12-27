'use client';

import { ReactNode, useEffect, useRef } from 'react';

export function Highlight({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const observerAdded = useRef(false);

  useEffect(() => {
    if (ref.current && !observerAdded.current) {
      if (!CSS.supports('animation-timeline: view()')) {
        const MARK = ref.current;
        const OPTS = {
          threshold: 1.0,
        };
        const HANDLE = (entries: any[]) => {
          entries.forEach((entry) => {
            entry.target.style.setProperty(
              '--highlighted',
              entry.isIntersecting ? 1 : 0
            );
          });
        };
        const OBSERVER = new IntersectionObserver(HANDLE, OPTS);

        OBSERVER.observe(MARK);

        observerAdded.current = true;
      }
    }
  }, [ref]);

  return (
    <mark
      ref={ref}
      className='text-primary-900 dark:text-primary-100'
      // @ts-expect-error
      style={{ '--highlighted': 0 }}
    >
      <span>{children}</span>
    </mark>
  );
}
