import { Footer, Navbar } from 'flowbite-react'
import React from 'react'
import NavbarPage from '../components/Navbar'
import { BoxesCore } from '../components/Background-boxes'
import Hero from '../components/Hero'
import FooterPage from '../components/Footer'

const Home = () => {
  return (
    
    <>

        <NavbarPage/>

        <Hero/>

        <FooterPage/>

    </>
    
   
  )
}

export default Home
