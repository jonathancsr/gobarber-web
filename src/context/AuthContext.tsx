import React, { createContext, useCallback } from 'react';

interface AuthContextData {
  name: string;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'diego' }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
