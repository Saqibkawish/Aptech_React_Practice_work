import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // For Icons
import './Footerr.css'; // Import custom CSS for styling


export default function Footerr() {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* Logo and Information */}
          <div className="col-md-4">
            <h4 className="text-white mb-3">Gym Website</h4>
            <p className="text-white">
              Our goal is to provide world-class fitness training and help you achieve your fitness goals with professional trainers.
            </p>
            <ul className="list-unstyled">
              <li><i className="bi bi-telephone-fill text-success"></i> +1 (800) 123-4567</li>
              <li><i className="bi bi-envelope-fill text-success"></i> support@gym.com</li>
              <li><i className="bi bi-geo-alt-fill text-success"></i> 123 Gym Street, Fitness City, 12345</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Facilities</a></li>
              <li><a href="#" className="text-white">Packages</a></li>
              <li><a href="#" className="text-white">Trainers</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-4">
            <h5 className="text-white mb-3">Follow Us</h5>
            <div>
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-youtube fs-4"></i>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p className="text-white mb-0">&copy; 2024 Gym Website. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
