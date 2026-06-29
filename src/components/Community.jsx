import React from 'react'
import { motion } from 'framer-motion'
import { Quotes } from '@phosphor-icons/react'

const testimonials = [
  {
    name: "Jonathan Yombo",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "Tailus is really extraordinary and very practical, no need to break your head. A real gold mine."
  },
  {
    name: "Yves Kalume",
    role: "GDE - Android",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    text: "With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus."
  },
  {
    name: "Yucel Faruksahan",
    role: "Tailkits Creator",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    text: "Great work on tailfolio template. This is one of the best personal website that I have seen so far :)"
  }
]

const avatars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Community() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { type: 'spring', damping: 20, stiffness: 100 } 
    }
  }

  return (
    <>
      <section className="py-40 bg-brand-apricot dark:bg-[#0b1014] relative overflow-hidden border-t border-brand-gunmetal/5 dark:border-white/5">
        <div className="mx-auto px-6 max-w-[1400px]">
          
          <div className="text-center max-w-2xl mx-auto mb-24">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block py-1.5 px-4 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-brand-orange/20"
            >
              Testimonials
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-gunmetal dark:text-white tracking-tight"
            >
              Loved by the <span className="text-brand-orange">Community</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="mt-6 text-xl text-brand-gunmetal/70 dark:text-white/60 font-medium leading-relaxed"
            >
              See what others are saying about our premium digital solutions and high-end aesthetic.
            </motion.p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="group relative"
              >
                {/* Outer Shell (Double-Bezel) */}
                <div className="absolute inset-0 bg-brand-gunmetal/5 dark:bg-white/5 rounded-[2.5rem] border border-brand-gunmetal/10 dark:border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2 group-hover:scale-[1.01]"></div>
                
                {/* Inner Core */}
                <div className="relative m-2 bg-white dark:bg-[#1A242B] p-8 rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-2 group-hover:scale-[1.01] overflow-hidden">
                  
                  {/* Subtle Glow inside the card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 to-brand-ford/0 group-hover:from-brand-orange/5 group-hover:to-brand-ford/5 transition-colors duration-700"></div>

                  <Quotes weight="fill" className="absolute top-8 right-8 text-6xl text-brand-ford/10 dark:text-brand-soft/5 group-hover:text-brand-orange/20 transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />
                  
                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-brand-orange/20 p-1 group-hover:border-brand-orange/50 transition-colors duration-500" />
                    <div>
                      <h4 className="font-bold text-lg text-brand-gunmetal dark:text-white">{t.name}</h4>
                      <p className="text-sm font-bold tracking-wide text-brand-ford dark:text-brand-soft">{t.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-brand-gunmetal/80 dark:text-white/70 leading-relaxed font-medium relative z-10 text-lg">
                    "{t.text}"
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <section className="py-32 bg-white dark:bg-[#10171d] relative overflow-hidden">
        <div className="mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-brand-gunmetal dark:text-white tracking-tight leading-[1.1]"
            >
              Built by the Community <br className="hidden md:block" /> for the Community
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {avatars.map((num) => (
              <motion.a 
                key={num}
                href="#"
                variants={fadeUp}
                whileHover={{ scale: 1.2, zIndex: 10, rotate: [-2, 2, -2, 0] }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                className="relative rounded-full p-1 bg-gradient-to-tr from-brand-orange to-brand-ford shadow-lg shadow-brand-ford/20 hover:shadow-2xl hover:shadow-brand-orange/40"
              >
                <img 
                  src={`https://randomuser.me/api/portraits/men/${num}.jpg`} 
                  alt="Community Member" 
                  className="w-16 h-16 rounded-full border-[3px] border-white dark:border-brand-gunmetal object-cover" 
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Community
