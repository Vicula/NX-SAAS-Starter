import React from 'react';
import { AuthProvider } from './AuthProvider';
import { TRPCProvider } from './tRPCProvider';

export interface GlobalProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: GlobalProviderProps) {
  return (
    <AuthProvider>
      <TRPCProvider>{children}</TRPCProvider>
    </AuthProvider>
  );
}

export default Provider;
