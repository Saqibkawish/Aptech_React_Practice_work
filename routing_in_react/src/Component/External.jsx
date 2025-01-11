import React from 'react';
// import './ExternalServices.css'; // Optional custom styles

const External = () => {
  const services = [
    { id: 1, name: 'Landscaping', description: 'Professional landscaping services for larger outdoor spaces.', price: '$1000+' },
    { id: 2, name: 'Garden Design', description: 'Custom garden design services to bring your vision to life.', price: '$1500+' },
    { id: 3, name: 'Tree Removal', description: 'Safe and efficient tree removal services for your property.', price: '$200+' },
    { id: 4, name: 'Irrigation Systems', description: 'Installation and maintenance of irrigation systems to ensure healthy plants.', price: '$500+' },
    { id: 5, name: 'Pest Control', description: 'Effective pest control services to protect your garden from harmful insects.', price: '$250+' },
  ];

  return (
    <section id="external-services" className="container my-5">
      <h2 className="text-sucess text-center mb-4">Our External Services</h2>

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

export default External;
