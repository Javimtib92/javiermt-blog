'use client';

import { ReactNode, useEffect, useRef } from 'react';

const colors = {
  primary: '201',
  secondary: '187',
  accent: '160',
};

// NOTE: I created this component instead of using the tag in the mdx file and style it through mdx-components because
// for some reason it is not processed that way. 😢  Revisit this in the future.
export function Highlight({
  color = 'primary',
  children,
}: {
  color: 'primary' | 'secondary' | 'accent';
  children: ReactNode;
}) {
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
      className='text-black dark:text-zinc-300'
      // @ts-expect-error
      style={{ '--hue': colors[color], '--highlighted': 0 }}
    >
      <span>{children}</span>
    </mark>
  );
}
