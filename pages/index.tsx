import React from 'react'
import Navbar from './Navbar' 
import Heropage from './Heropage'
import Testimonial from './Testimonial_Page'
import OurClients from './OurClients'
import Features from './Features'
import CAB from './CAB'
import Footer from './Footer'

const index = ({posts}:{posts:any}) => {
  return (
    <div>
      <Navbar />
      <Heropage />
      <Features />
      <Testimonial />
      <OurClients />
      <CAB />
      <Footer/>
    </div>
  )
}
export default index