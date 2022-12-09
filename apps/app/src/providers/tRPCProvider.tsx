/**
 ==============================================================================
 * @file   tRPCProvider
 * @brief  we provide the tRPC context to the rest of the app here
 ==============================================================================
 * @attention
 *
 * Copyright (c) Victor Carpenter D.B.A., [Some Company], LLC 
 * All rights reserved.
 *
 ==============================================================================
 */

import { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getFetch } from '@trpc/client';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import { trpc } from '../utils/trpc';

export interface tRPCProviderProps {
  children: React.ReactNode;
}

/**
 * 
 * Here are creating the provider for the tRPC client
 */
export function TRPCProvider({ children }: tRPCProviderProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );
  const [trpcClient] = useState(() => {
    return trpc.createClient({
      links: [
        loggerLink(),
        httpBatchLink({
          url: 'http://localhost:8000/api/trpc',
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: 'include',
            });
          },
        }),
      ],
    });
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
