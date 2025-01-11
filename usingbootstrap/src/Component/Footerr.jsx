import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Footer() {
  return (
    <footer className="bg-success text-white pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Column 1: Contact Information */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p><strong>Hospital Name</strong></p>
            <p><i className="bi bi-geo-alt"></i> 123 Main Street, City, Country</p>
            <p><i className="bi bi-telephone"></i> +123 456 789</p>
            <p><i className="bi bi-envelope"></i> info@hospital.com</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Doctors</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook" style={{ fontSize: '24px' }}></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-twitter" style={{ fontSize: '24px' }}></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram" style={{ fontSize: '24px' }}></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-linkedin" style={{ fontSize: '24px' }}></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="text-white" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Hospital Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
