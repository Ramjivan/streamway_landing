import React from 'react'
import Navbar from './Navbar' 
import Heropage from './Heropage'
import Testimonial from './Testimonial_Page'
import OurClients from './OurClients'
import Features from './Features'
import CAB from './CAB'

const index = () => {
  return (
    <div>
      <Navbar />
      <Heropage />
      <Features />
      <OurClients />
      <CAB />
      <Testimonial />
    </div>
  )
}

export default index
