import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      review: 'Gardner helped me create the garden of my dreams. Their service is exceptional, and their team is very professional!',
    },
    {
      id: 2,
      name: 'Sarah Smith',
      rating: 4,
      review: 'A great experience! The quality of plants and garden accessories is outstanding. Highly recommend!',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      rating: 5,
      review: 'I love how they incorporate sustainability into their work. My garden has never looked better.',
    },
    {
      id: 4,
      name: 'Emily Davis',
      rating: 4,
      review: 'Great customer service and attention to detail. The team really listens to your needs.',
    },
  ];

  return (
    <section id="customer-reviews" className="container my-5">
      <h2 className="text-sucess text-center mb-4">What Our Customers Say</h2>

      <div className="row">
        {reviews.map((review) => (
          <div className="col-md-3 mb-4" key={review.id}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-center">{review.name}</h5>
                <div className="rating text-center">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-warning">★</span>
                  ))}
                  {Array.from({ length: 5 - review.rating }).map((_, i) => (
                    <span key={i + review.rating} className="text-muted">★</span>
                  ))}
                </div>
                <p className="card-text mt-3">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
