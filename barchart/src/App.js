import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ChartWrapper from './ChartWrapper';

class App extends React.Component {
  render() {
    return (
      <div ref="chart">
        <Navbar bg="light">
          <Navbar.Brand>Barchart</Navbar.Brand>
        </Navbar>
        <Container>
          <ChartWrapper />
        </Container>
      </div>
    );
  }
}

export default App;
