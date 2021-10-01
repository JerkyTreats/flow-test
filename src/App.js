import './App.scss';
import React from 'react';
import Providers from './providers/Providers.comp';
import Navbar from './components/Navbar';
import Routes from './components/Routes.comp'
import { ROUTES } from './config/routes.config';

function App() {

  return (
    <div className="app">
      <Providers>
        <Navbar />
        <Routes routes={ROUTES}/>
      </Providers>
    </div>

  );
}

export default App; 
