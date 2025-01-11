import React from 'react';
// import './InternalServices.css'; // Optional custom styles

const Internal = () => {
  const services = [
    { id: 1, name: 'Plant Consultation', description: 'Expert advice on gardening and plant care.', price: '$50/hr' },
    { id: 2, name: 'Garden Setup', description: 'Complete setup of garden including planting and arrangement.', price: '$300' },
    { id: 3, name: 'Maintenance', description: 'Regular maintenance of your garden to keep it healthy.', price: '$100/month' },
    { id: 4, name: 'Sustainable Solutions', description: 'Eco-friendly gardening practices to reduce environmental impact.', price: '$80/hr' },
    { id: 5, name: 'Workshops & Training', description: 'Hands-on workshops on various gardening techniques.', price: '$25/person' },
  ];

  return (
    <section id="internal-services" className="container my-5">
      <h2 className="text-sucess text-center mb-4">Our Internal Services</h2>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Service</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.id}>
              <td>{service.id}</td>
              <td>{service.name}</td>
              <td>{service.description}</td>
              <td>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Internal;
