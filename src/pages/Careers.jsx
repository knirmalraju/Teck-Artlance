import React from 'react'
import CareersBanner from '../components/CareersBanner'
import Findrole from '../components/Findrole'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Teams from '../components/Teams'
import Aboutvideo from '../components/Aboutvideo'

const Careers = () => {
  return (
    <div>
        <Navbar/>
        <CareersBanner/>
        <Teams/>
        <Aboutvideo/>
        <Findrole/>
        <Footer/>
    </div>
  )
}

export default Careers