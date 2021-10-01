import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider } from './AuthProvider'

export default function Providers({ children }) {

  return (
    <Router>
    <AuthProvider>
      <div className="app">
        {children}
      </div>
    </AuthProvider>
    </Router>
  )
}
