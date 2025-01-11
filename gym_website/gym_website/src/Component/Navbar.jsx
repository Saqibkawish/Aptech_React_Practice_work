import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* Logo on the left side */}
        <a className="navbar-brand" href="#">
          <img
            src="/image/logo.png" // Replace with your actual logo path
            alt="Gym Logo"
            width="100"
            height="50"
            className="d-inline-block align-top"
          />
        </a>

        {/* Navbar Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Facilities</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Packages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Trainers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
