/**
 ==============================================================================
 * @file   AuthProvider
 * @brief  where we provide context to the active user's permissions
 ==============================================================================
 * @attention
 *
 * Copyright (c) Victor Carpenter D.B.A., [Some Company], LLC 
 * All rights reserved.
 *
 ==============================================================================
 */

import React, { Dispatch, SetStateAction } from 'react';

export interface AuthProviderProps {
  children: React.ReactNode;
}

type UserDataType = {
  hasUser: boolean;
  username: string;
};

export const AuthUserContext = React.createContext<
  | {
      userData: UserDataType;
      setUser: Dispatch<SetStateAction<UserDataType>>;
    }
  | undefined
>(undefined);

export function AuthProvider({ children }: AuthProviderProps) {
  const [userData, setUser] = React.useState({ hasUser: false, username: '' });

  return (
    <AuthUserContext.Provider
      value={{
        userData,
        setUser,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
}

export const useAuthUser = () => {
  const context = React.useContext(AuthUserContext);

  if (context === undefined) {
    throw new Error('useAuthUser must be used within a AuthProvider');
  }

  return context;
};
