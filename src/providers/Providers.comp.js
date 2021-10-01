import React from 'react'
import Navbar from '../components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom'


export default function Providers({ children }) {
  return (
    <Router> 
      <div className="app">
        {children}
      </div>
    </Router>
  )
}
