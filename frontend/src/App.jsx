import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import Features from './components/Features/Features'
import About from './components/About/About'
import Testimonial from './components/Testimonial/Testimonial'
import Pricing from './components/Pricing/Pricing'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Encryption from './components/Encryption/Encryption'
import Decryption from './components/Decryption/Decryption'
import EncryptedDownload from './components/EncryptedDownload/EncryptedDownload'
import DecryptedDownload from './components/DecryptedDownload/DecryptedDownload'


function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/encryption" element={<Encryption />} />
            <Route path="/decryption" element={<Decryption />} />
            <Route path="/encrypted_download" element={<EncryptedDownload />} />
            <Route path="/decrypted_download" element={<DecryptedDownload />} />
          </Routes>
          <Footer />
      </Router>
    </>
  )
}

export default App
