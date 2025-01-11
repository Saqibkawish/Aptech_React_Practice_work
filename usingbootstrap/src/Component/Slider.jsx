import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS

export default function Slider() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/image/a.jpg" className="d-block w-100 custom-carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/image/b.jpg" className="d-block w-100 custom-carousel-img" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/image/c.jpg" className="d-block w-100 custom-carousel-img" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <style jsx>{`
        /* Custom size for carousel images */
        .custom-carousel-img {
          height: 800px;  /* Adjust the height here */
          object-fit: cover; /* Ensures the image covers the container while maintaining the aspect ratio */
        }
      `}</style>
    </div>
  );
}
