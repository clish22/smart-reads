// basic home page
import React from 'react';
import BootstrapNavbar from '../components/Navbar';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <BootstrapNavbar />
      <Container className="text-center p-3">
        <Row>
          <Col>
            <h1>Welcome to SmartReads</h1>
            <h3>Click on the links above to navigate to the pages</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
