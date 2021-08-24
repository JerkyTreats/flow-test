import { Header } from './components/Header'
import { GlobalStyle } from './components/AppContainer'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckAddress from './components/CheckAddress';
import InitializeAccount from './components/InitializeAccount'
import { Container, Row } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
        <Header />
        <br />
        <Container>
          <Row>
            <CheckAddress />
          </Row>
          <Row> 
            < InitializeAccount />
          </Row>
        </Container>
    </React.Fragment>
  );
}

export default App; 
