import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';

// Header component for the app that contains the navigation bar and logo for the app. Items are spaced out with margain.
function Navbar() {
  return (
    <BootstrapNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <BootstrapNavbar.Brand href="/">SmartReads</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
      <BootstrapNavbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/library">Library</Nav.Link>
          <Nav.Link href="/feedback">Feedback</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}

export default Navbar;
