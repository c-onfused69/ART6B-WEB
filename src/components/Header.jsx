import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-4 pt-6 md:pt-8 flex justify-center">
      
      {/* The Fluid Island */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] flex items-center justify-between px-6 py-3 rounded-full border shadow-2xl ${
          isScrolled 
            ? 'bg-white/80 dark:bg-brand-gunmetal/80 backdrop-blur-2xl border-black/5 dark:border-white/10 shadow-black/10' 
            : 'bg-white/50 dark:bg-brand-gunmetal/50 backdrop-blur-lg border-transparent shadow-transparent'
        } w-full max-w-[1200px] lg:w-max lg:gap-12`}
      >
        {/* Logo */}
        <a href="/" className="relative z-50 flex-shrink-0">
          <img src="/public/logo.svg" alt="ART6B Logo" className="h-7 md:h-8 transition-transform duration-500 hover:scale-105" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="relative px-5 py-2.5 group text-brand-gunmetal dark:text-white font-medium text-sm tracking-wide"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-brand-orange">{link.name}</span>
              <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-orange transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:w-1/2 opacity-0 group-hover:opacity-100"></span>
            </a>
          ))}
        </div>

        {/* Magnetic CTA Button (Desktop) */}
        <motion.a 
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
          href="#contact" 
          className="hidden lg:flex items-center gap-3 px-6 py-2.5 bg-brand-orange text-white rounded-full font-bold text-sm shadow-lg shadow-brand-orange/20 transition-all duration-500 group"
        >
          Let's Talk
          <div className="size-6 rounded-full bg-white/20 flex items-center justify-center transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:scale-110">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 11L11 1M11 1H3.5M11 1V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </motion.a>

        {/* Hamburger Morph (Mobile) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-[60] size-10 flex flex-col justify-center items-center gap-[5px]"
        >
          <motion.span 
            animate={{ 
              rotate: isMobileMenuOpen ? 45 : 0, 
              y: isMobileMenuOpen ? 7 : 0 
            }} 
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-6 h-[2px] bg-brand-gunmetal dark:bg-white block rounded-full" 
          />
          <motion.span 
            animate={{ 
              opacity: isMobileMenuOpen ? 0 : 1,
              scaleX: isMobileMenuOpen ? 0 : 1
            }} 
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-6 h-[2px] bg-brand-gunmetal dark:bg-white block rounded-full" 
          />
          <motion.span 
            animate={{ 
              rotate: isMobileMenuOpen ? -45 : 0, 
              y: isMobileMenuOpen ? -7 : 0 
            }} 
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="w-6 h-[2px] bg-brand-gunmetal dark:bg-white block rounded-full" 
          />
        </button>
      </motion.nav>

      {/* Mobile Modal Expansion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(32px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-white/90 dark:bg-brand-gunmetal/95 pointer-events-auto flex flex-col justify-center px-8"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.a 
                    href={link.href}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-4xl font-black text-brand-gunmetal dark:text-white tracking-tight hover:text-brand-orange transition-colors"
                  >
                    {link.name}
                  </motion.a>
                </div>
              ))}
            </div>
            
            <div className="overflow-hidden mt-12">
              <motion.a
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                onClick={() => setIsMobileMenuOpen(false)}
                href="#contact"
                className="inline-flex items-center gap-4 px-8 py-4 bg-brand-orange text-white rounded-full font-bold text-lg shadow-xl shadow-brand-orange/20"
              >
                Let's Talk
                <ArrowRightIcon />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.16666 10H15.8333M15.8333 10L10 4.16669M15.8333 10L10 15.8334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default Header