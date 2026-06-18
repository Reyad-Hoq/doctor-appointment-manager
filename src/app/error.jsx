'use client';

import { Button } from '@heroui/react';

export default function Error({ error, reset }) {
  return (<div className="flex min-h-[70vh] items-center justify-center px-4"> <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-lg"> <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100"> <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-12 w-12 text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  > <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v4m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
    /> </svg> </div>


    <h1 className="mb-3 text-4xl font-bold text-slate-900">
      Something Went Wrong
    </h1>

    <p className="mb-8 text-slate-600">
      We encountered an unexpected error while processing your request.
      Please try again.
    </p>

    <div className="flex justify-center gap-4">
      <Button
        onPress={() => reset()}
        className="bg-blue-600 text-white hover:bg-blue-700"
      >
        Try Again
      </Button>

      <Button
        variant="bordered"
        onPress={() => window.location.href = '/'}
      >
        Go Home
      </Button>
    </div>

    {process.env.NODE_ENV === 'development' && (
      <div className="mt-8 rounded-2xl bg-slate-100 p-4 text-left">
        <p className="font-semibold text-red-500">
          Development Error:
        </p>
        <p className="mt-2 break-words text-sm text-slate-600">
          {error?.message}
        </p>
      </div>
    )}
  </div>
  </div>

  );
}
