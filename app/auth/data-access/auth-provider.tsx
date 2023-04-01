import { Session } from '@supabase/supabase-js'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { supabase } from '../../init-supabase'

export interface AuthInput {
  email: string
  password: string
}

export interface AuthProviderContext {
  loading: boolean
  loggedIn: boolean
  loggingIn: boolean
  login: (input: AuthInput) => Promise<void>
  logout: () => void
  register: (input: AuthInput) => Promise<void>
  registering: boolean
}

const AuthContext = createContext<AuthProviderContext>({} as AuthProviderContext)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<boolean | undefined>(undefined)
  const [session, setSession] = useState<Session | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [loggingIn, setLoggingIn] = useState(false)
  const [registering, setRegistering] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      setLoading(false)
      if (data.session) {
        console.log(`Auth: getSession: ${data.session.user.email}`)
        setSession(data.session)
      }
      setUser(!!data.session)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setSession(session)
        setUser(!!session)
      }
    })

    return () => {
      authListener.subscription.unsubscribe()
    }

    // setTimeout(() => setLoading(false), 1000)
  }, [user])

  useEffect(() => {
    if (!session) return
    console.log({
      session,
    })
  }, [session])

  const value: AuthProviderContext = {
    loggedIn: !!session,
    loading,
    login: async (input: AuthInput) => {
      setLoggingIn(true)
      console.log(`Auth: login: ${input.email}`)
      const { error, data } = await supabase.auth.signInWithPassword({ email: input.email, password: input.password })
      console.log({
        error,
        data,
      })
      if (error) {
        console.log('error', error)
      }
      if (data.session) {
        console.log('data', data)
        setSession(data.session)
        setUser(!!data.session)
      }
      setLoggingIn(false)
    },
    logout: () => {
      supabase.auth.signOut().then(() => {
        setSession(undefined)
        setUser(false)
      })
    },
    loggingIn,
    registering,
    register: async (input: AuthInput) => {
      setRegistering(true)
      const { error, data } = await supabase.auth.signUp({ email: input.email, password: input.password })
      if (error) {
        console.log('error', error)
      }
      if (data.session) {
        console.log('data', data)
        setSession(data.session)
        setUser(!!data.session)
      }
      setRegistering(false)
    },
  }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
