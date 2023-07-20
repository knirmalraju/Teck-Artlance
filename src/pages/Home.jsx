import React from 'react'
import Aboutvideo from '../components/Aboutvideo'
import Artlance from '../components/Artlance'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Games from '../components/Games'
//import Dummy from '../components/Dummy'
import Navbar from '../components/Navbar'
import Partners from '../components/Partners'
import Records from '../components/Records'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Records/>
        <Aboutvideo/>
        <Artlance/>
        <Games/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Home