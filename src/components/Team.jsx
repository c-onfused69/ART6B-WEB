import React from 'react'
import { motion } from 'framer-motion'

function TeamCard({ member, index }) {
  const isEven = index % 2 !== 0
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className={`bg-white dark:bg-[#202d35] border border-brand-gunmetal/10 dark:border-brand-soft/10 rounded-[2.5rem] p-8 transition-shadow hover:shadow-[0_20px_40px_-15px_rgba(27,38,44,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] flex flex-col ${isEven ? 'md:mt-16' : ''}`}
    >
      <div className="mb-8 flex">
        <div className="size-20 rounded-full bg-brand-apricot dark:bg-brand-gunmetal flex items-center justify-center text-brand-orange dark:text-brand-soft font-black text-2xl border border-brand-orange/20 dark:border-brand-ford/30 shadow-inner">
          {member.name.charAt(0)}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-brand-gunmetal dark:text-white tracking-tight">{member.name}</h3>
        <span className="text-sm font-bold text-brand-ford dark:text-brand-soft block mt-2 mb-5 uppercase tracking-widest">{member.role}</span>
        <p className="text-brand-gunmetal/70 dark:text-white/60 text-sm leading-relaxed max-w-[40ch] font-medium">{member.description}</p>
      </div>
    </motion.div>
  )
}

function Team() {
  const team = [
    {
      name: 'Fatin Hasnat Rahman',
      role: 'CEO & Co-Founder',
      description: '5 years of experience in Visual Storytelling, Print Material Design and Social Media Handling. Graduated from the University of Dhaka. Loves to write stories and poetries.'
    },
    {
      name: 'Farid Hossain',
      role: 'Lead Animator',
      description: 'Professional 2D animator with over 5 years of experience in the global marketplace and a top-rated seller on Fiverr. Explains ideas by creating handdrawn animations.'
    },
    {
      name: 'Saif',
      role: 'Visual Storyteller',
      description: '4 years of experience in visual storytelling, graphic design, and branding. Passionate about visual storytelling and drawing. BRAC University graduate.'
    },
    {
      name: 'Nahijul Islam Niloy',
      role: 'Lead Developer',
      description: '2 years of experience in Web and Software Development. CSE graduate from East West University.'
    },
    {
      name: 'Faisal',
      role: 'Marketing',
      description: 'Passionate about transforming ideas into brands through market research and analysis. Known for his hard work and punctuality. Currently pursuing his MBA in Marketing.'
    },
    {
      name: 'Tarick Ali Shawon',
      role: 'Advisor',
      description: 'Over 8 years of experience in marketing and sales, including work with major companies, and is passionate about the startup.'
    }
  ]

  return (
    <section id="team" className="py-32 bg-brand-apricot dark:bg-brand-gunmetal border-t border-brand-gunmetal/10 dark:border-brand-soft/5">
      <div className="mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl tracking-tighter leading-none font-black text-brand-gunmetal dark:text-white">Meet Our Team</h2>
            <p className="mt-6 text-brand-gunmetal/80 dark:text-white/80 text-lg font-medium">
              Our "6 brothers" approach fosters collaboration and ensures every project receives the combined expertise and unique perspectives of our entire team.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center gap-2 text-brand-gunmetal dark:text-white font-bold hover:text-brand-orange transition-colors">
              Join our team
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
