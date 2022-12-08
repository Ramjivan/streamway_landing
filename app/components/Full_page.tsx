import React from 'react'
import Main from './main'
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
const Full_page = () => {
  return (
    <>
    
    <Landing/>
    <Main/>
    <Feature/>
      <CEO/>
    <Steps/>
    <Why/>
    <Pricing/>
    <Test/>
    <FAQ/>
    <SignIn_Page/>
    <Footer/>
    
    </>
  )
}

export default Full_page