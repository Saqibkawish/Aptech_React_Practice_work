import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h4 className="text-primary">Gardner</h4>
            <p>
              At Gardner, we are passionate about making gardening accessible, sustainable, and enjoyable for everyone. Join us in creating beautiful, eco-friendly green spaces.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-primary">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/service" className="text-white text-decoration-none">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-white text-decoration-none">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-primary">Follow Us</h5>
            <div>
              <a href="https://facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook" style={{ fontSize: '30px' }}></i>
              </a>
              <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter" style={{ fontSize: '30px' }}></i>
              </a>
              <a href="https://instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram" style={{ fontSize: '30px' }}></i>
              </a>
              <a href="https://linkedin.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin" style={{ fontSize: '30px' }}></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="text-white" />
        
        {/* Bottom Copyright Section */}
        <div className="row">
          <div className="col text-center">
            <p>&copy; 2025 Gardner. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
