import React from 'react'
import ContactUs from './ContactUs'
import CustomerReviews from './CustomerReviews'
import Footer from './Footer'


export default function Feedback() {
  return (
    <div className='row'>
      <div className='col-md-6'>
        <ContactUs />
      </div>
      <div className='col-md-6'>
        <CustomerReviews />
      </div>

      < Footer /> 
    </div>
  )
}
