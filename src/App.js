import './App.scss';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/Routes.comp'
import { ROUTES } from './config/routes.config';

function App() {

  return (
    <Router> 
      <Navbar />
      <Routes routes={ROUTES}/>
    </Router>
  );
}

export default App; 
