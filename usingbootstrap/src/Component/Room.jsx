import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure Bootstrap CSS is imported

export default function RoomsAccordion() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Hospital Rooms</h2>

      <div className="accordion" id="roomsAccordion">
        
        {/* Room 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Standard Room
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#roomsAccordion"
          >
            <div className="accordion-body">
              <strong>Standard Room</strong> offers a comfortable stay for patients who require basic care. 
              It includes:
              <ul>
                <li>Private Bed</li>
                <li>Attached Bathroom</li>
                <li>Air-conditioning</li>
                <li>TV with Cable</li>
                <li>Wi-Fi Access</li>
                <li>Basic Medical Facilities</li>
              </ul>
              <p><strong>Price:</strong> $100 per night</p>
            </div>
          </div>
        </div>

        {/* Room 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Deluxe Room
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#roomsAccordion"
          >
            <div className="accordion-body">
              <strong>Deluxe Room</strong> provides enhanced amenities for a more comfortable and private stay. 
              It includes:
              <ul>
                <li>King-sized Bed</li>
                <li>Attached Bathroom with Bathtub</li>
                <li>Air-conditioning</li>
                <li>LED TV with Cable</li>
                <li>High-speed Wi-Fi</li>
                <li>Mini Fridge</li>
                <li>Round-the-clock Nurse Assistance</li>
              </ul>
              <p><strong>Price:</strong> $200 per night</p>
            </div>
          </div>
        </div>

        {/* Room 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              ICU Room
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#roomsAccordion"
          >
            <div className="accordion-body">
              <strong>ICU Room</strong> is designed for critical care patients. It is equipped with the latest medical technology:
              <ul>
                <li>ICU Bed with Monitoring System</li>
                <li>Ventilator & Oxygen Supply</li>
                <li>24/7 Intensive Care Nursing</li>
                <li>Advanced Medical Equipment</li>
                <li>Private Family Space</li>
              </ul>
              <p><strong>Price:</strong> $500 per night</p>
            </div>
          </div>
        </div>

        {/* Room 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              VIP Suite
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#roomsAccordion"
          >
            <div className="accordion-body">
              <strong>VIP Suite</strong> offers the highest level of luxury and privacy for patients who seek the best experience:
              <ul>
                <li>Spacious Living Area</li>
                <li>King-sized Bed with Custom Mattress</li>
                <li>Luxurious Bathroom with Jacuzzi</li>
                <li>Private Dining Area</li>
                <li>Personal Nurse and Attendant</li>
                <li>Premium Entertainment System</li>
                <li>Free Room Service</li>
              </ul>
              <p><strong>Price:</strong> $1000 per night</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
