import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './AuthProvider'

export default function Providers({ children }) {
  return (
    <BrowserRouter>
      <AuthProvider>
            <div className="app">
              {children}
            </div>
      </AuthProvider>
    </BrowserRouter>
  )
}
