import React from 'react'
import Main from './main'
import Landing from './NavBar'
import Steps from './Steps'
import SignIn_Page from './SignIn_Page'
import './index.css'
import Footer from './Footer'
import Why from './Why'
import FAQ from './FAQ'
import CAB from './CAB'
const Full_page = () => {
  return (
    <>
    <Landing/>
    <Main/>
    <Steps/>
    <Why/>
    <FAQ/>
    <SignIn_Page/>
    <Footer/>
    <CAB/>
    </>
  )
}

export default Full_page