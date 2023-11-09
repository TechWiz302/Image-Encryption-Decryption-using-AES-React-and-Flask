import React, {useState, useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import Features from '../Features/Features'
import About from '../About/About'
import Testimonial from '../Testimonial/Testimonial'
import Pricing from '../Pricing/Pricing'

function Home() {

    return (
        <>
            <div className="heroSection">
                <Navbar />
                <HeroSection />
            </div>
            <Features />
            <About />
            <Testimonial />
            <Pricing />
        </>
    )
}

export default Home