import React from 'react'
import { motion } from 'framer-motion'
import { Code, Megaphone, RocketLaunch, Printer, PenNib, VideoCamera, ShareNetwork } from '@phosphor-icons/react'

function PerpetualFloat({ children, delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay
      }}
    >
      {children}
    </motion.div>
  )
}

function DoubleBezelCard({ title, description, icon: Icon, delay, colSpan = "col-span-1" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay }}
      className={`relative group ${colSpan}`}
    >
      {/* Outer Shell */}
      <div className="absolute inset-0 bg-brand-gunmetal/5 dark:bg-white/5 rounded-[2.5rem] border border-brand-gunmetal/10 dark:border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.01]"></div>
      
      {/* Inner Core */}
      <div className="relative m-2 h-[calc(100%-1rem)] bg-white dark:bg-[#1A242B] rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-10 flex flex-col justify-between transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden">
        
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ford/0 via-transparent to-brand-orange/0 opacity-0 group-hover:opacity-100 group-hover:from-brand-ford/10 group-hover:to-brand-orange/10 transition-opacity duration-700 pointer-events-none"></div>

        <div className="mb-12 relative z-10">
          <PerpetualFloat delay={delay}>
            <div className="size-16 rounded-full bg-brand-apricot dark:bg-brand-gunmetal flex items-center justify-center border border-brand-orange/20 dark:border-brand-ford/30 shadow-inner group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <Icon size={32} weight="duotone" className="text-brand-orange dark:text-brand-soft" />
            </div>
          </PerpetualFloat>
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-black text-brand-gunmetal dark:text-white mb-3 tracking-tight group-hover:text-brand-ford transition-colors duration-500">{title}</h3>
          <p className="text-brand-gunmetal/70 dark:text-white/60 text-base leading-relaxed max-w-[40ch] font-medium">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

function Services() {
  return (
    <section id="services" className="py-40 bg-brand-apricot dark:bg-[#0b1014] relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-ford/10 dark:bg-brand-ford/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 dark:bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="mb-24 flex flex-col items-start">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-brand-ford/10 text-brand-ford dark:text-brand-soft text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-brand-ford/20"
          >
            Digital Mastery
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.05] font-black text-brand-gunmetal dark:text-white"
          >
            Our <span className="text-brand-ford dark:text-brand-soft">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-brand-gunmetal/80 dark:text-white/70 text-xl max-w-[55ch] font-medium leading-relaxed"
          >
            We offer a comprehensive suite of digital solutions designed to elevate your brand and drive meaningful results across all touchpoints.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DoubleBezelCard 
            title="Website Development" 
            description="Build stunning, user-friendly websites that captivate your audience and deliver seamless experiences across all devices."
            icon={Code}
            delay={0.1}
            colSpan="lg:col-span-2"
          />
          <DoubleBezelCard 
            title="Digital Marketing" 
            description="Craft data-driven strategies to boost your online presence, drive traffic, and convert leads into loyal customers."
            icon={RocketLaunch}
            delay={0.2}
          />
          <DoubleBezelCard 
            title="Brand Promotions" 
            description="Create impactful campaigns that amplify your brand's voice and connect with your target audience on a deeper level."
            icon={Megaphone}
            delay={0.3}
          />
          <DoubleBezelCard 
            title="Print on Demand" 
            description="Deliver high-quality, customized print solutions that bring your brand to life, from merchandise to marketing materials."
            icon={Printer}
            delay={0.4}
            colSpan="lg:col-span-2"
          />
          <DoubleBezelCard 
            title="Graphics & Illustrations" 
            description="Design visually striking graphics and illustrations that tell your brand's story and leave a lasting impression."
            icon={PenNib}
            delay={0.5}
            colSpan="lg:col-span-2"
          />
          <DoubleBezelCard 
            title="2D Whiteboard Animation" 
            description="Engage your audience with dynamic, storytelling animations that simplify complex ideas and captivate viewers."
            icon={VideoCamera}
            delay={0.6}
          />
          <DoubleBezelCard 
            title="Social Media Handling" 
            description="Manage your social media presence with creativity and strategy, ensuring consistent engagement and growth."
            icon={ShareNetwork}
            delay={0.7}
            colSpan="lg:col-span-3"
          />
        </div>
      </div>
    </section>
  )
}

export default Services