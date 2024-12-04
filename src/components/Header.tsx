'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navVariants = {
    top: {
      backgroundColor: 'rgba(10, 25, 47, 0)',
      boxShadow: 'none',
    },
    scrolled: {
      backgroundColor: 'rgba(10, 25, 47, 0.8)',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      initial="top"
      animate={isScrolled ? "scrolled" : "top"}
      variants={navVariants}
    >
      <nav className={`container mx-auto px-4 py-4 flex justify-between items-center ${isScrolled ? 'glassmorphism' : ''}`}>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-2xl font-bold text-primary">
            CellSight
          </Link>
        </motion.div>
        <div className="hidden md:flex space-x-6">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#available-tests">Available Tests</NavLink>
          <NavLink href="#benefits">Benefits</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <Menu className="w-6 h-6 text-secondary" />
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glassmorphism"
        >
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <NavLink href="#features" onClick={() => setIsOpen(false)}>Features</NavLink>
            <NavLink href="#how-it-works" onClick={() => setIsOpen(false)}>How It Works</NavLink>
            <NavLink href="#available-tests" onClick={() => setIsOpen(false)}>Available Tests</NavLink>
            <NavLink href="#benefits" onClick={() => setIsOpen(false)}>Benefits</NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} className="text-text hover:text-secondary transition-colors duration-200" onClick={onClick}>
      {children}
    </Link>
  )
}

