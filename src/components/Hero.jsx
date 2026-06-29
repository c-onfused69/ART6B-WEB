import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play } from '@phosphor-icons/react'

function Hero() {
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax Values
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200])
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] pt-32 pb-24 lg:pt-48 flex items-center bg-white dark:bg-brand-gunmetal overflow-hidden"
    >
      
      {/* Abstract Background Blur Nodes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-ford/10 dark:bg-brand-ford/5 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/10 dark:bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="mx-auto px-6 max-w-[1400px] relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Typography Section */}
          <motion.div 
            style={{ y: yText, opacity }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-brand-ford/10 text-brand-ford dark:text-brand-soft text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 md:mb-8 border border-brand-ford/20">
                A Creative Brotherhood
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-brand-gunmetal dark:text-white tracking-tight leading-[1.05] mb-8">
                Building Brands <br /> That <span className="text-brand-orange">Inspire.</span>
              </h1>
              <p className="text-lg md:text-xl text-brand-gunmetal/70 dark:text-white/60 leading-relaxed font-medium max-w-[45ch] mb-12">
                We craft stories that resonate, build brands that inspire, and deliver digital results that matter for forward-thinking companies.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <motion.a 
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-brand-orange text-white rounded-full font-bold text-lg shadow-2xl shadow-brand-orange/20 overflow-hidden"
                >
                  <span className="relative z-10">Start a Project</span>
                  <div className="relative z-10 size-8 rounded-full bg-white/20 flex items-center justify-center transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:scale-110">
                    <ArrowRight weight="bold" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-[#ff6014] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.a>

                <motion.button 
                  whileHover={{ scale: 0.98 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-4 text-brand-gunmetal dark:text-white font-bold"
                >
                  <div className="size-14 rounded-full bg-brand-gunmetal/5 dark:bg-white/5 border border-brand-gunmetal/10 dark:border-white/10 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-brand-ford/10 group-hover:border-brand-ford/20">
                    <Play weight="fill" className="text-brand-gunmetal dark:text-white group-hover:text-brand-ford ml-1 transition-colors" />
                  </div>
                  <span className="group-hover:text-brand-ford transition-colors">Showreel</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Parallax Image Grid */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[700px] w-full hidden md:block">
            
            <motion.div 
              style={{ y: yImage1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
              className="absolute top-0 right-0 w-[80%] h-[70%] rounded-[2.5rem] overflow-hidden shadow-2xl z-20 border-4 border-white dark:border-brand-gunmetal"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Creative Team" 
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-brand-ford/10 mix-blend-overlay"></div>
            </motion.div>

            <motion.div 
              style={{ y: yImage2 }}
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="absolute bottom-12 left-0 w-[60%] h-[50%] rounded-[2.5rem] overflow-hidden shadow-2xl z-30 border-4 border-white dark:border-brand-gunmetal"
            >
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Office Brainstorming" 
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-brand-orange/10 mix-blend-overlay"></div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero