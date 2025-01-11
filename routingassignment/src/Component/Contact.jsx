import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Contact.css'; // Import custom CSS for styling


export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been submitted!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-dark">Contact Us</h2>

      <div className="row">
        {/* Left Side: Contact Info */}
        <div className="col-md-6 mb-4">
          <div className="contact-info p-4 bg-light rounded shadow-sm">
            <h5 className="text-center mb-3">Get in Touch</h5>
            <p className="text-center">We would love to hear from you. Reach out to us for any inquiries!</p>

            <ul className="list-unstyled">
              <li><i className="bi bi-telephone-fill text-success"></i> <strong>Phone:</strong> +1 (800) 123-4567</li>
              <li><i className="bi bi-envelope-fill text-success"></i> <strong>Email:</strong> support@gym.com</li>
              <li><i className="bi bi-geo-alt-fill text-success"></i> <strong>Address:</strong> 123 Gym Street, Fitness City, 12345</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="shadow-lg p-4 bg-light rounded">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
