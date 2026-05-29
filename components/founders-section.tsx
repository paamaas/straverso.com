"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const founders = [
  {
    name: "Jo Henning Kolstad",
    role: "Partner",
    bio: "Bakgrunn innen salg, markedsføring og kommersiell utvikling. Jobber med posisjonering, brukerbehov og hvordan produktene skal nå markedet.",
    initial: "G1"
  },
  {
    name: "Paal Aamaas",
    role: "Partner",
    bio: "Fullstack-utvikler med erfaring innen AI, produktutvikling, forretningsutvikling og markedsføring. Jobber med teknisk arkitektur, utvikling og produktstrategi. Opptatt av å gjøre komplekse problemer om til enkle, brukbare løsninger.",
    initial: "G2"
  }
]

export function FoundersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo via-[#0D1048] to-indigo pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-lavender text-sm tracking-[0.3em] uppercase font-sans">
            Teamet
          </span>
          <div className="w-16 h-px bg-lavender/30 mt-4 mb-8" />
          <h2 className="font-serif text-3xl md:text-5xl text-offwhite">
            Et lite team
            <br />
            <span className="text-coral">med bred erfaring.</span>
          </h2>
        </motion.div>

        {/* Founders grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="relative bg-[#161A5E]/30 border border-lavender/10 rounded-2xl p-8 transition-all duration-500 hover:border-lavender/20">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-coral/20 to-lavender/20 flex items-center justify-center mb-6 border border-lavender/20">
                  <span className="font-serif text-2xl text-offwhite/80">
                    {founder.initial}
                  </span>
                </div>
                
                {/* Info */}
                <h3 className="font-serif text-xl text-offwhite mb-1 group-hover:text-coral transition-colors duration-300">
                  {founder.name}
                </h3>
                <p className="text-lavender text-sm font-sans mb-4">
                  {founder.role}
                </p>
                <p className="font-sans text-offwhite/60 leading-relaxed text-sm">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
