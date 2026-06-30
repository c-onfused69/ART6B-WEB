import React from 'react'
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo, ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0b1014] text-white pt-24 pb-8 border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-brand-ford/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-block mb-6">
              <img src="../public/logo.svg" alt="ART6B Logo" className="h-10" />
            </a>
            <p className="text-white/60 font-medium leading-relaxed mb-8 max-w-[30ch]">
              We craft stories that resonate, build brands that inspire, and deliver results that matter.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-orange hover:text-white hover:-translate-y-1 transition-all duration-300">
                <FacebookLogo size={20} weight="fill" />
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-orange hover:text-white hover:-translate-y-1 transition-all duration-300">
                <TwitterLogo size={20} weight="fill" />
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-orange hover:text-white hover:-translate-y-1 transition-all duration-300">
                <InstagramLogo size={20} weight="fill" />
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-orange hover:text-white hover:-translate-y-1 transition-all duration-300">
                <LinkedinLogo size={20} weight="fill" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-white/60 hover:text-brand-orange font-medium transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-brand-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/60 hover:text-brand-orange font-medium transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-brand-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Our Services</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/60 hover:text-brand-orange font-medium transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-brand-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-brand-orange font-medium transition-colors flex items-center gap-2 group">
                  <ArrowRight size={14} className="text-brand-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-brand-soft font-medium transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-soft font-medium transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/60 hover:text-brand-soft font-medium transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Subscribe</h4>
            <p className="text-white/60 font-medium mb-4">
              Get the latest updates and digital insights straight to your inbox.
            </p>
            <div className="flex bg-white/5 rounded-full p-1 border border-white/10 focus-within:border-brand-ford transition-colors">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-white px-4 w-full placeholder:text-white/30"
              />
              <button className="bg-brand-orange text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-brand-orange/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 font-medium text-sm">
            &copy; {currentYear} ART6B. All rights reserved.
          </p>
          <p className="text-white/40 font-medium text-sm">
            Designed with passion in Dhaka.
          </p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
