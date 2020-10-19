import { createContext, useContext } from 'react';

// create hook for context
export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
