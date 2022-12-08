import React, { useMemo, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
// import { trpc } from '@conference-demos/trpc-client';
// import { ProviderProps } from './Provider';

import { useAuthUser } from './AuthProvider';

let apiHost = '';

if ('production' === process.env.NODE_ENV) {
  apiHost =
    typeof manifest?.packagerOpts === `object` && manifest.packagerOpts.dev
      ? manifest.debuggerHost?.split(`:`).shift()?.concat(`:4200`)
      : endpoint;

  // add http if not present
  if (!apiHost.startsWith('http')) {
    apiHost = `http://${apiHost}`;
  }
} else {
  apiHost = endpoint;
}

export function TRPCProvider({ children }: ProviderProps) {
  const { userData } = useAuthenticatedUser();
  const [queryClient] = useState(() => new QueryClient());
  const trpcClient = useMemo(() => {
    return trpc.createClient({
      url: `${apiHost}/api/trpc`,

      // optional
      headers() {
        const idToken = userData.username;

        return {
          authorization: `Bearer ${idToken}`,
        };
      },
    });
  }, [userData.username]);

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
