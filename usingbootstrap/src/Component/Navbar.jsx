import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success justify-content-center">
        {/* Navbar Toggler for mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links and brand */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* mx-auto to center the items */}
            <li className="nav-item">
              <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Doctors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Room</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Service</a>
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
