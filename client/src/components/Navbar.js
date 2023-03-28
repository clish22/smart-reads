import React from 'react';

// Header component for the app that contains the navigation bar and logo for the app. Items are spaced out with margain.
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img
          src="https://i.imgur.com/9X9ZgRv.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        <span className="navbar-text">GPT-3 Feedback</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/feedback">
              Feedback
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
