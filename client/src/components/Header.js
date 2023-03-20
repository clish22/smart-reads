import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// Header component for the app that contains the navigation bar and logo for the app. Items are spaced out with margain.
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">SmartReads</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/library">Library</Nav.Link>
          <Nav.Link href="/feedback">Feedback</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
