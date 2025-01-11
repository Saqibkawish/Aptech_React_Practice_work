import React from 'react';
import Footer from './Footer';

const FAQ = () => {
  const faqData = [
    {
      question: 'What services does Gardner provide?',
      answer: 'Gardner offers a variety of services including landscaping, garden design, maintenance, and eco-friendly gardening solutions.',
    },
    {
      question: 'How can I contact Gardner for service inquiries?',
      answer: 'You can contact us via our contact page or reach out to us through our customer support at support@gardner.com.',
    },
    {
      question: 'Do you offer sustainable gardening solutions?',
      answer: 'Yes! We specialize in sustainable gardening practices, using organic materials, water conservation techniques, and eco-friendly products.',
    },
    {
      question: 'Can I request a customized garden design?',
      answer: 'Absolutely! We offer personalized garden designs to suit your needs and preferences. Simply fill out our consultation form and our experts will guide you.',
    },
    {
      question: 'What is your service area?',
      answer: 'We offer services across the metropolitan area and surrounding regions. Please check our location page for more details.',
    },
    {
      question: 'What are your working hours?',
      answer: 'We are available from Monday to Saturday, 9 AM to 6 PM. For emergency services, please contact us via our hotline.',
    },
  ];

  return (
    <div>
    <section id="faq" className="container my-5">
      <h2 className="text-sucess text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqData.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </section>
    < Footer /> 

    </div>
    
  );
};

export default FAQ;
