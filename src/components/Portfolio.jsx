import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

const projects = [
  {
    title: "mapd.",
    desc: "A higher education consulting firm guiding students and young professionals from South Asia and the Middle East.",
    img: "/mapd.png",
    link: "https://www.behance.net/gallery/212099535/Mapd-Brand-Identity"
  },
  {
    title: "Redland Digital",
    desc: "A Dhaka, Bangladesh-based digital solution agency consists of creative individuals, honing their skills for years.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "#"
  },
  {
    title: "LAST SODA",
    desc: "A product concept for a business competition. The world's first soda that provides a classic soda experience.",
    img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "#"
  }
]

function Portfolio() {
  return (
    <section id="portfolio" className="py-40 bg-brand-gunmetal relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-ford/5 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="mx-auto px-6 max-w-[1400px] relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-6 border border-brand-orange/20"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]"
          >
            Some of our <span className="text-brand-soft">works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="mt-8 text-xl text-white/70 leading-relaxed font-medium"
          >
            At ART6B, we don’t just create campaigns—we craft stories that resonate, build brands that inspire, and deliver results that matter.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.32, 0.72, 0, 1] }}
              className="group relative"
            >
              {/* Outer Shell (Double-Bezel) */}
              <div className="absolute inset-0 bg-white/5 rounded-[2.5rem] border border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.02]"></div>

              {/* Inner Core */}
              <div className="relative m-2 h-[calc(100%-1rem)] bg-[#10171d] rounded-[calc(2.5rem-0.5rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.02]">
                
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gunmetal/40 group-hover:bg-transparent transition-colors duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] z-10"></div>
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  />
                  
                  {/* Brand Badge */}
                  <div className="absolute top-4 left-4 z-20 size-12 bg-white/90 backdrop-blur-md rounded-[1rem] flex items-center justify-center shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <img src="/public/logo.svg" alt="ART6B Logo" className="h-6" />
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col relative z-20">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-soft transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">{project.title}</h3>
                  <p className="text-white/60 font-medium leading-relaxed mb-8 flex-1">
                    {project.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-white/10 flex justify-between items-center mt-auto">
                    <a href={project.link} className="flex items-center gap-2 text-brand-orange font-bold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      <span className="group-hover:translate-x-1 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">Read More</span>
                      <div className="size-8 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors duration-500">
                        <ArrowUpRight weight="bold" className="transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-500" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
