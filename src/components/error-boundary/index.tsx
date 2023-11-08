'use client';

import { FC, ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary, useErrorBoundary } from 'react-error-boundary';
import * as Sentry from '@sentry/nextjs'

type ErrorFallbackProps = {
  error: Error;
};

const ErrorFallback: FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <>
      <div className="invisible absolute">
        <p>{error.name}</p>
        <p>{error.message}</p>
      </div>
    </>
  );
};

type ErrorBoundaryProps = {
  children: ReactNode;
};

const ErrorBoundary: FC<ErrorBoundaryProps> = ({ children }) => {
  return <ReactErrorBoundary onError={() => Sentry.captureMessage('I Send from boundary')} FallbackComponent={ErrorFallback}>{children}</ReactErrorBoundary>;
};

export default ErrorBoundary;
