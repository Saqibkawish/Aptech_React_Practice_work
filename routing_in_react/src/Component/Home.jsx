import React from 'react'
import Carousal from './Carousal'
import Ourmotive from './Ourmotive'
import About from './About'
import Footer from './Footer'


export default function Home() {
  return (
    <div>
      <Carousal />
      <Ourmotive />
      <About /> 
      <Footer />
    </div>
  )
}
