'use client';

import { Sandpack } from '@codesandbox/sandpack-react';
import React, { Suspense } from 'react';

class ErrorBoundary extends React.Component<
  { fallback: React.ReactNode; children?: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { fallback: React.ReactNode; children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='mb-8 flex items-center rounded border border-red-700 bg-red-200 p-1 px-4 py-3 text-sm text-red-900'>
          <div className='callout w-full'>{this.props.fallback}</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function CodeSandbox({ files }: { files: any }) {
  return (
    <Suspense fallback={null}>
      <ErrorBoundary fallback={'There was an error loading the CodeSandbox.'}>
        <Sandpack
          theme='auto'
          template='static'
          files={files}
          options={{ bundlerURL: 'https://sandpack-bundler.pages.dev' }}
        />
      </ErrorBoundary>
    </Suspense>
  );
}
