import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';  // Import Bootstrap Icons

export default function Facilities() {
  return (
    <div className="container my-5">
      {/* Improved Heading with Icon */}
      <h2 className="text-center mb-4 text-dark">
        <i className="bi bi-gear-fill text-success me-3"></i> {/* Gym Icon */}
        <span>Our Gym Facilities</span>
      </h2>

      {/* Bootstrap Table with Custom Class */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover shadow-lg custom-table">
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Facility</th>
              <th scope="col">Description</th>
              <th scope="col">Timing</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cardio Zone</td>
              <td>State-of-the-art cardio machines for endurance training.</td>
              <td>6 AM - 10 PM</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Weight Training</td>
              <td>Fully equipped area with free weights and machines for strength training.</td>
              <td>6 AM - 10 PM</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Yoga & Pilates</td>
              <td>Dedicated space for yoga and Pilates classes with experienced instructors.</td>
              <td>7 AM - 9 PM</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Swimming Pool</td>
              <td>Heated pool for swimming, water aerobics, and relaxation.</td>
              <td>8 AM - 8 PM</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Group Classes</td>
              <td>Zumba, HIIT, and other fun group workout classes to stay motivated.</td>
              <td>7 AM - 7 PM</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Personal Training</td>
              <td>Certified personal trainers to provide customized workout plans.</td>
              <td>By Appointment</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
