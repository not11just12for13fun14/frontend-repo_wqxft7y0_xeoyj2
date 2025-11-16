import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyTrustUs from './components/WhyTrustUs'
import EarlyAccess from './components/EarlyAccess'
import FeaturesBento from './components/FeaturesBento'
import YesList from './components/YesList'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-[#313138]">
      <Navbar />
      <main>
        <Hero />
        <WhyTrustUs />
        <EarlyAccess />
        <div id="features">
          <FeaturesBento />
        </div>
        <YesList />
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  )
}
