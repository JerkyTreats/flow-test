import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './components/Routes.comp'
import { ROUTES } from './config/routes.config';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { darkTheme } from "./components/Themes"

function App() {

  return (
    <ThemeProvider theme={ darkTheme }>
      <>
      <GlobalStyles/>
        <Router> 
          <Navbar />

          {/* <Routes routes={ROUTES}/> */}
        </Router>
     </>
    </ThemeProvider>
  );
}

export default App; 
