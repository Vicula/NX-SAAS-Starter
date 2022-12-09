/**
 ==============================================================================
 * @file   GlobalProvider
 * @brief  where we include all the other providers for clean code
 ==============================================================================
 * @attention
 *
 * Copyright (c) Victor Carpenter D.B.A., [Some Company], LLC 
 * All rights reserved.
 *
 ==============================================================================
 */

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
