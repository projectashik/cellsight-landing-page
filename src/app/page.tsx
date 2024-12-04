"use client"

import AvailableTests from "@/components/AvailableTests"
import Benefits from "@/components/Benefits"
import Contact from "@/components/Contact"
import Features from "@/components/Features"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import Testimonials from "@/components/Testimonials"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-text'>
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Features />
        <HowItWorks />
        <AvailableTests />
        <Benefits />
        <Testimonials />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  )
}
