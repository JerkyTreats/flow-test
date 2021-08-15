import { Header } from './components/Header'
import { GlobalStyle } from './components/AppContainer'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
    </React.Fragment>
  );
}

export default App; 
