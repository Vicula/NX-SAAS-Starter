import React from 'react';
import { AuthProvider } from './AuthProvider';

export interface GlobalProviderProps {
  children: React.ReactNode;
}

export function Provider({ children }: GlobalProviderProps) {
  return (
    <AuthProvider>
          {children}
    </AuthProvider>
  );
}

export default Provider;
