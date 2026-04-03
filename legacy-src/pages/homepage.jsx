import React from 'react'
import About from '../components/about/About'
import Work from '../components/work/Work'
import Exp from '../components/exp/Exp'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

function homepage() {
  return (
    <>
      <About />
      <Exp />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default homepage


