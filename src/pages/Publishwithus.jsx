import React from 'react'
import Footer from '../components/Footer'
import Games from '../components/Games'
import Navbar from '../components/Navbar'
import Partners from '../components/Partners'
import Publishbg from '../components/Publishbg'
import Records from '../components/Records'
import Pubprocedure from '../components/Pubprocedure'

const Publishwithus = () => {
  return (
    <div>
        <Navbar/>
        <Publishbg/>
        <Pubprocedure/>
        <Records/>
        <Games/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Publishwithus