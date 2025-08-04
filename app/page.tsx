import AboutCard from '@/components/AboutCard'
import AboutSection from '@/components/AboutSection'
import ContactForm from '@/components/ContactForm'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/Services'
import WorkSection from '@/components/WorkSection'
import { Contact } from 'lucide-react'
import React from 'react'

const app = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WorkSection />
      <ContactForm />
      
    </div>
  )
}

export default app
