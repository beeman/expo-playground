import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

export interface AuthProviderContext {
  loading: boolean
  loggedIn: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthProviderContext>({} as AuthProviderContext)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  const value: AuthProviderContext = {
    loggedIn,
    loading,
    login: () => setLoggedIn(true),
    logout: () => setLoggedIn(false),
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
