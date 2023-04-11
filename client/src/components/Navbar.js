import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/android-chrome-192x192.png';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <Link to="/" className="navbar-brand align p-0 me-4">
          <img src={logo} alt="logo" className="d-inline-block navbar-logo align-top" /> Smart Reads
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item align">
              <Link to="/feedback" className="nav-link" aria-current="page">
                Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
