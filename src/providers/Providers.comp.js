import React from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider } from './AuthProvider'
import { TxProvider } from './TxProvider'

export default function Providers({ children }) {

  return (
    <Router>
    <AuthProvider>
      <TxProvider>
        <div className="app">
          {children}
        </div>
      </TxProvider>
    </AuthProvider>
    </Router>
  )
}
