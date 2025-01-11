import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

export default function Services() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Hospital Services</h2>

      {/* Services Table */}
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Service Name</th>
              <th scope="col">Description</th>
              <th scope="col">Duration</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>Consultation</td>
              <td>Consult with a specialist doctor for initial diagnosis and advice on treatment.</td>
              <td>30 mins</td>
              <td>$50</td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>Emergency Care</td>
              <td>Immediate treatment for serious injuries, heart attacks, and other critical conditions.</td>
              <td>Varies</td>
              <td>$200</td>
            </tr>

            {/* Row 3 */}
            <tr>
              <td>Surgery</td>
              <td>General and specialized surgeries for various medical conditions.</td>
              <td>Varies</td>
              <td>$500 - $5000 (depending on the procedure)</td>
            </tr>

            {/* Row 4 */}
            <tr>
              <td>Laboratory Tests</td>
              <td>Blood tests, urine tests, and other diagnostic procedures to detect diseases.</td>
              <td>Varies</td>
              <td>$30 - $300 (depending on test)</td>
            </tr>

            {/* Row 5 */}
            <tr>
              <td>Physiotherapy</td>
              <td>Rehabilitation services for recovery from injuries, surgeries, and chronic conditions.</td>
              <td>45 mins</td>
              <td>$60 per session</td>
            </tr>

            {/* Row 6 */}
            <tr>
              <td>Maternity Care</td>
              <td>Comprehensive care for pregnancy, delivery, and postnatal care.</td>
              <td>9 months</td>
              <td>$3000 (package)</td>
            </tr>

            {/* Row 7 */}
            <tr>
              <td>Vaccination</td>
              <td>Immunization for various diseases for children and adults.</td>
              <td>Varies</td>
              <td>$20 - $100 (depending on vaccine)</td>
            </tr>

            {/* Row 8 */}
            <tr>
              <td>Radiology</td>
              <td>X-rays, MRIs, CT scans, and other imaging procedures for diagnosis.</td>
              <td>Varies</td>
              <td>$100 - $1000 (depending on procedure)</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
