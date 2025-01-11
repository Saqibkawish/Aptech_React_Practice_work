import React from 'react';
// import './Ourmotive.css'; // Ensure you include custom styles if needed

export default function Ourmotive() {
  return (
    <section id="our-motive" className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-sucess">Our Motive</h2>
          <p>
            At Gardner, we believe that a garden is not just a space to grow plants; it's a sanctuary for nature and a reflection of our values. Our mission is simple yet powerful: to make gardening accessible, sustainable, and enjoyable for everyone.
          </p>
          <p>
            Through our products, resources, and community efforts, we aim to inspire individuals to cultivate their own green spaces, embrace eco-friendly gardening practices, and foster a deeper connection with the earth.
          </p>
          <p>
            We are passionate about promoting sustainable gardening practices that not only beautify our surroundings but also contribute to a healthier planet. Whether you're planting your first seed or you're a seasoned gardener, our goal is to empower you with the tools and knowledge to create a garden that brings joy, health, and harmony to your life.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/image/oa.jpg"
            alt="Garden"
            className="img-fluid rounded shadow-lg custom-img"
          />
        </div>
      </div>
    </section>
  );
}
