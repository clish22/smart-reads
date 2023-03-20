// basic home page
import React from 'react';
import Header from '../components/Header';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <Header />
      <Container className="text-center p-3">
        <Row>
          <Col>
            <h1>SmartReads</h1>
            <h3>Find your next book</h3>
            <p>
              SmartReads is a leading educational technology company that provides personalized
              reading assessment and improvement solutions for students and teachers. Our
              cutting-edge AI technology offers accurate and efficient assessments of students'
              reading levels, and our customized recommendations empower teachers to support their
              students' growth and success. We believe that every student has the potential to
              become a confident and skilled reader, and we are dedicated to helping them unlock
              their full potential.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
