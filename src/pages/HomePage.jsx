import React from 'react'
import Hero from '../components/HeroSection/HeroSection'
import AboutSection from '../components/AboutSection'
import ListingSection from '../components/ListingSection'
import ContactSection from '../components/ContactSection'

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ListingSection />
      <ContactSection />
    </>
  )
}

export default HomePage
