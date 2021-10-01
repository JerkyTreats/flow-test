import React from 'react'
import useCurrentUser from '../hooks/use-current-user.hook'

const AuthContext = React.createContext()

export function useAuth() {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error(`useAuth must be used within a AuthContext`)
    }
    return context;
}

export function AuthProvider({ children }) {
    const [user, loggedIn, tools] = useCurrentUser()

    return (
        <AuthContext.Provider value={{
          user,
          loggedIn,
          ...tools
        }}>
          {children}
        </AuthContext.Provider>
      )
}
