import React from 'react'
import Navbar from '../components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider, useAuth } from './AuthProvider'

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
