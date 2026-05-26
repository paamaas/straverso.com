"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function PhilosophySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo via-[#0D1048] to-indigo pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-lavender text-sm tracking-[0.3em] uppercase font-sans">
            Filosofi
          </span>
          <div className="w-16 h-px bg-lavender/30 mt-4" />
        </motion.div>
        
        {/* Main manifesto text */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-8"
          >
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-offwhite leading-tight mb-8">
              Kompleksitet har lag.
              <br />
              <span className="text-coral">Vi vender dem.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-10 md:col-start-2"
          >
            <p className="font-sans text-lg md:text-xl text-offwhite/70 leading-relaxed mb-8">
              Hvert problem er bygget opp av lag – noen synlige, noen skjulte. 
              Vi graver dypt, snur hvert lag, og finner løsninger som andre overser. 
              Det er her AI møter menneskelig innsikt.
            </p>
            <p className="font-sans text-base text-lavender/60 leading-relaxed italic">
              Strata + Verso = å vende lagene. Det er mer enn et navn – det er metoden vår.
            </p>
          </motion.div>
        </div>
        
        {/* Approach pillars */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mt-24"
        >
          {[
            {
              title: "Dybde",
              description: "Vi går til bunns i hvert problem. Ingen overfladiske løsninger.",
              number: "01"
            },
            {
              title: "Helhet",
              description: "Fra minste detalj til det store bildet – alt henger sammen.",
              number: "02"
            },
            {
              title: "Hastighet",
              description: "AI-drevet utvikling. Rask iterasjon uten å miste kvalitet.",
              number: "03"
            }
          ].map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="group"
            >
              <span className="text-coral/40 text-sm font-mono mb-4 block">
                {pillar.number}
              </span>
              <h3 className="font-serif text-2xl text-offwhite mb-3 group-hover:text-coral transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="font-sans text-offwhite/60 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
