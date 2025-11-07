'use client'


import Hero  from './components/hero';
import Footer from './components/footer';

import Navbar from './components/navbar';
import gsap from 'gsap'
import { ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'

export default function Page() {

  
  return (
    <>
    
    <Navbar />
    <Hero />
    <Footer />
    </>
  )
}
