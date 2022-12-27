import React from 'react'
import Navbar from './Navbar' 
import Heropage from './Heropage'
import OurClients from './OurClients'
import Features from './Features'
import CAB from './CAB'
import Footer from './Footer'

const index = () => {
  return (
    <div>
      <Navbar />
      <Heropage />
      <Features />
      <OurClients />
      <CAB />
      <Footer/>
    </div>
  )
}

export default index