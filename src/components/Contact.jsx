import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, EnvelopeSimple } from '@phosphor-icons/react'

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  }

  return (
    <section id="contact" className="py-32 bg-brand-apricot dark:bg-brand-gunmetal border-t border-brand-gunmetal/10 dark:border-brand-soft/5 relative overflow-hidden">
      
      {/* Decorative Blur Elements */}
      <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] bg-brand-ford/10 dark:bg-brand-ford/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="mx-auto px-6 max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-2">
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-brand-gunmetal dark:text-white tracking-tight leading-[1.1]">
              Ready to take your brand <br /> to <span className="text-brand-orange">new heights?</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-6 text-lg text-brand-gunmetal/80 dark:text-white/70 leading-relaxed font-medium max-w-[45ch]">
              Let us bring your vision to life! Contact us today to discuss your next big project.
            </motion.p>
            
            <div className="mt-12 space-y-8">
              <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                <div className="size-14 rounded-full bg-white dark:bg-[#202d35] flex items-center justify-center border border-brand-gunmetal/10 dark:border-brand-soft/10 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all">
                  <MapPin size={28} weight="duotone" className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-gunmetal dark:text-white">Address</h4>
                  <p className="text-brand-gunmetal/70 dark:text-white/60 mt-1 font-medium leading-relaxed">
                    1158/2 Malibagh Chowdhurypara<br />Dhaka-1219, Bangladesh.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                <div className="size-14 rounded-full bg-white dark:bg-[#202d35] flex items-center justify-center border border-brand-gunmetal/10 dark:border-brand-soft/10 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all">
                  <Phone size={28} weight="duotone" className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-gunmetal dark:text-white">Phone</h4>
                  <p className="text-brand-gunmetal/70 dark:text-white/60 mt-1 font-medium leading-relaxed">
                    +880 1688 0918 54<br />+880 1864 2534 54
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="flex items-start gap-6 group">
                <div className="size-14 rounded-full bg-white dark:bg-[#202d35] flex items-center justify-center border border-brand-gunmetal/10 dark:border-brand-soft/10 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all">
                  <EnvelopeSimple size={28} weight="duotone" className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brand-gunmetal dark:text-white">Email & Web</h4>
                  <p className="text-brand-gunmetal/70 dark:text-white/60 mt-1 font-medium leading-relaxed">
                    art6b.info@gmail.com<br />www.art6b.com.bd
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
            className="bg-white dark:bg-[#202d35] border border-brand-gunmetal/10 dark:border-brand-soft/10 p-10 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(27,38,44,0.05)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] relative z-10"
          >
            <h3 className="text-3xl font-black text-brand-gunmetal dark:text-white mb-8 tracking-tight">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-brand-gunmetal dark:text-white mb-2 ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full rounded-2xl border-2 border-brand-gunmetal/10 dark:border-white/10 bg-transparent px-5 py-4 text-brand-gunmetal dark:text-white font-medium focus:border-brand-ford focus:outline-none focus:ring-4 focus:ring-brand-ford/10 transition-all placeholder:text-brand-gunmetal/30 dark:placeholder:text-white/30" 
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-gunmetal dark:text-white mb-2 ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full rounded-2xl border-2 border-brand-gunmetal/10 dark:border-white/10 bg-transparent px-5 py-4 text-brand-gunmetal dark:text-white font-medium focus:border-brand-ford focus:outline-none focus:ring-4 focus:ring-brand-ford/10 transition-all placeholder:text-brand-gunmetal/30 dark:placeholder:text-white/30" 
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-gunmetal dark:text-white mb-2 ml-1">Message</label>
                <textarea 
                  rows="4" 
                  className="w-full rounded-2xl border-2 border-brand-gunmetal/10 dark:border-white/10 bg-transparent px-5 py-4 text-brand-gunmetal dark:text-white font-medium focus:border-brand-ford focus:outline-none focus:ring-4 focus:ring-brand-ford/10 transition-all placeholder:text-brand-gunmetal/30 dark:placeholder:text-white/30 resize-none" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button" 
                className="w-full py-4 bg-brand-orange text-white rounded-full font-bold text-lg shadow-lg shadow-brand-orange/20 transition-colors hover:bg-brand-orange/90"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact
