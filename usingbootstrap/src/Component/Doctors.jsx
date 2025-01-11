import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure Bootstrap CSS is imported

export default function Doctors() {
  return (
    <div className="container mt-4">
      {/* Doctors Heading */}
      <h2 className="text-center mb-4">Doctors</h2>

      <div className="row">
        {/* Card 1 */}
        <div className="col-md-3 col-6 mb-4">
          <div className="card">
            <img src="/image/da.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3 col-6 mb-4">
          <div className="card">
            <img src="/image/db.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3 col-6 mb-4">
          <div className="card">
            <img src="/image/dc.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3 col-6 mb-4">
          <div className="card">
            <img src="/image/da.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col-md-3 col-6 mb-4">
          <div className="card">
            <img src="/image/db.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-md-3 col-6 mb-4">
          <div className="card">
            <img src="/image/dc.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="col-md-3 col-6 mb-4">
          <div className="card">
            <img src="/image/db.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="col-md-3 col-6 mb-4">
          <div className="card">
            <img src="/image/dc.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
