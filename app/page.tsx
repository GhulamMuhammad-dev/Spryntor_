import AboutSection from '@/components/AboutSection'
import ContactForm from '@/components/ContactForm'
import CTABanner from '@/components/CTABanner'
import Hero from '@/components/Hero'
import ResultsSection from '@/components/ResultsSection'
import ServicesSection from '@/components/Services'
import TrustedBySection from '@/components/TrustedBy'
import WhatIDoSection from '@/components/WhatIDo'
import FeaturedWork from '@/components/WorkSection'
import WorkSection from '@/components/WorkSection'
import React from 'react'

const app = () => {
  return (
    <div>
      <Hero />
      <TrustedBySection />
      <WhatIDoSection />
      {/* <AboutSection /> */}
      {/* <ServicesSection /> */}
      <WorkSection/>
      <ResultsSection />
      <CTABanner />
      {/* <ContactForm /> */}
      
    </div>
  )
}

export default app
