import { Children, Component, createContext, useEffect, useState } from 'react'
import { setCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/router'

import { recoverUserInformation, signInRequest } from '../services/auth'
import { api } from '../services/api'

interface User {
  name: string
  email: string
  avatar_url: string
}

interface SignInData {
  email: string
  password: string
}

interface AuthContextType {
  isAuthenticated: boolean
  user: User
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)

  const router = useRouter()

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'somaSac.token': token } = parseCookies()

    if (token) {
      recoverUserInformation().then(response => {
        setUser(response.user)
      })
    }
  }, [])

  const signIn = async ({ email, password }: SignInData) => {
    const { token, user } = await signInRequest({
      email,
      password
    })

    setCookie(undefined, 'somaSac.token', token, {
      maxAge: 60 * 60 * 1 // 1 hour
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`

    setUser(user)

    router.push('/dashboard')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
