import React from 'react'
import Main from './main'
import Ourclients from './Ourclients'
import Landing from './NavBar'
import Steps from './Steps'
import SignIn_Page from './SignIn_Page'
import './index.css'
import Footer from './Footer'
import Why from './Why'
import FAQ from './FAQ'
import Test from './Test'
import Pricing from './Pricing'
import Feature from './Feature'
import CEO from './CEO'
import Sliders from './Sliders'
import Hemb from './Images/Hemb'
import Testimonial_Page from './Testimonial_Page'
import Cab from "./CAB";

const Full_page = () => {
  return (
    <>
    
    <Landing/>
    <Main/>
    <Testimonial_Page/>
    <Cab/>
{/* <Ourclients /> */}
      {/* <Hemb/>
      <Feature/>
        <CEO/>
      <Steps/>
      <Why/>
      <Pricing/>
      <Test/>
      <Sliders/>
      <FAQ/>
      <SignIn_Page/> */}
    <Footer/>
    
    
    </>
  )
}

export default Full_page