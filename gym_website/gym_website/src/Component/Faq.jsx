import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


export default function Faq() {
  return (
    <div className="container my-5">
      {/* Page Title */}
      <h2 className="text-center mb-4 text-dark">Frequently Asked Questions</h2>

      {/* FAQ Accordion */}
      <div className="accordion" id="faqAccordion">
        {/* FAQ Item 1 */}
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
              What are the gym's opening hours?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Our gym is open from 5:00 AM to 10:00 PM every day. We provide flexible schedules to accommodate all members.
            </div>
          </div>
        </div>

        {/* FAQ Item 2 */}
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
              Do I need to book a session with a trainer in advance?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, we recommend booking a session with our certified trainers at least 24 hours in advance. This ensures availability and allows the trainer to prepare a personalized workout plan.
            </div>
          </div>
        </div>

        {/* FAQ Item 3 */}
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
              What equipment does the gym provide?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              We provide a variety of fitness equipment, including treadmills, stationary bikes, free weights, resistance machines, yoga mats, and more. Our gym has all the essential equipment you need to achieve your fitness goals.
            </div>
          </div>
        </div>

        {/* FAQ Item 4 */}
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
              Are there any membership packages available?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, we offer various membership packages to suit your needs. You can choose between monthly, quarterly, and annual memberships. Contact us to learn more about pricing and exclusive offers.
            </div>
          </div>
        </div>

        {/* FAQ Item 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Can I freeze my membership for a month or two?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body">
              Yes, we offer a membership freeze option for up to 2 months. Just let us know in advance, and we’ll help you freeze your membership until you're ready to return.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
