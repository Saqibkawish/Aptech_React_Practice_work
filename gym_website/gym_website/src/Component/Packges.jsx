import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Packges() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-dark">Our Gym Packages</h2>

      {/* Row to display the packages */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Basic Package */}
        <div className="col">
          <div className="card shadow-lg">
            <img src="/image/ba.avif" className="card-img-top" alt="Basic Package" />
            <div className="card-body">
              <h5 className="card-title text-center text-primary">Basic Package</h5>
              <p className="card-text">
                Our basic package includes access to the gym, cardio equipment, and group fitness classes. Perfect for beginners.
              </p>
              <h4 className="text-center text-success">$29/month</h4>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-primary">Get Started</a>
            </div>
          </div>
        </div>

        {/* Premium Package */}
        <div className="col">
          <div className="card shadow-lg">
            <img src="/image/bb.avif" className="card-img-top" alt="Premium Package" />
            <div className="card-body">
              <h5 className="card-title text-center text-warning">Premium Package</h5>
              <p className="card-text">
                This package includes everything in the basic package, plus access to personal trainers and premium classes.
              </p>
              <h4 className="text-center text-success">$49/month</h4>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-warning">Get Started</a>
            </div>
          </div>
        </div>

        {/* VIP Package */}
        <div className="col">
          <div className="card shadow-lg">
            <img src="/image/bc.avif" className="card-img-top" alt="VIP Package" />
            <div className="card-body">
              <h5 className="card-title text-center text-danger">VIP Package</h5>
              <p className="card-text">
                The VIP package includes all the features of the Premium package, plus exclusive access to a private lounge, spa, and more.
              </p>
              <h4 className="text-center text-success">$79/month</h4>
            </div>
            <div className="card-footer text-center">
              <a href="#" className="btn btn-danger">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
