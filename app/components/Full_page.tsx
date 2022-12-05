import React from 'react'
import Main from './main'
import Landing from './NavBar'
import Steps from './Steps'
import SignIn_Page from './SignIn_Page'
import './index.css'
import Footer from './Footer'
const Full_page = () => {
  return (
    <>
    <Landing/>
    <Main/>
    <Steps/>
    <SignIn_Page/>
    <Footer/>
    </>
  )
}

export default Full_page