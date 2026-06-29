import React from 'react'
import { motion } from 'framer-motion'

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  }

  return (
    <section id="about" className="py-32 bg-white dark:bg-[#151d22] relative overflow-hidden">
      {/* Decorative Brand Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-brand-orange to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-px bg-gradient-to-r from-brand-ford to-transparent opacity-50"></div>

      <div className="mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block py-1 px-3 rounded-full bg-brand-ford/10 text-brand-ford dark:text-brand-soft text-sm font-bold tracking-widest uppercase mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-brand-gunmetal dark:text-white tracking-tight leading-[1.1]">
                Where creativity meets <br />
                <span className="text-brand-orange">collaboration.</span>
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-brand-gunmetal/80 dark:text-white/70 leading-relaxed font-medium">
              ART6B is a fusion of "art" and "<span className="text-brand-ford dark:text-brand-soft font-bold">6 brothers</span>," symbolizing our commitment to creativity, collaboration, and innovation. We believe that every brand has a unique story to tell, and we are here to bring those stories to life through cutting-edge digital solutions.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-lg text-brand-gunmetal/80 dark:text-white/70 leading-relaxed font-medium">
              We're more than just a branding agency; we're a collective of passionate storytellers and creative problem-solvers. Our approach fosters collaboration and ensures every project receives the combined expertise and unique perspectives of our entire team.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-brand-gunmetal/80 dark:text-white/70 leading-relaxed font-medium border-l-4 border-brand-orange pl-6 py-2">
              We believe in crafting authentic brand narratives that resonate deeply with your target audience. At ART6B, we're not just building brands, we're building partnerships.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-brand-ford/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
              alt="Team Collaboration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Floating Statistic Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, type: 'spring' }}
              viewport={{ once: true }}
              className="absolute bottom-8 right-8 bg-white/90 dark:bg-brand-gunmetal/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-brand-gunmetal/10 dark:border-white/10 z-20"
            >
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-brand-orange flex items-center justify-center text-white font-black text-2xl">
                  6
                </div>
                <div>
                  <p className="font-bold text-brand-gunmetal dark:text-white">Brothers</p>
                  <p className="text-sm font-medium text-brand-gunmetal/60 dark:text-white/60">One Vision</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About
