import React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChartWrapper from './ChartWrapper';
import GenderDropdown from './GenderDropdown';

class App extends React.Component {
  render() {
    return (
      <div ref="chart">
        <Navbar bg="light">
          <Navbar.Brand>Barchart</Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col xs={12}>
              <GenderDropdown />
            </Col>
          </Row>
          <Row>
            <Col xs={12}></Col>
          </Row>
          <ChartWrapper />
        </Container>
      </div>
    );
  }
}

export default App;
