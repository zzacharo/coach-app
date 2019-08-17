import React from 'react';
import { Container, Col, Row, Navbar } from 'react-bootstrap';
import { WodEditorForm } from './WodEditorForm';
import logo from './mlm-logo.png';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' MLM Wod Editor'}
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row className="justify-content-md-center">
          <Col sm="8">
            <WodEditorForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
