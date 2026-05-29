"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Home, Beer, Calendar, Train } from "lucide-react"

const products = [
  {
    name: "Concertus",
    description: "Et digitalt arbeidsverktøy for kor, korps, band, sangere og orkestre. Concertus samler stemmeøving, partitur, øvingsplanlegging og kommunikasjon i én løsning – utviklet med innsikt fra musikkmiljøet.",
    icon: null,
    logoSrc: "/concertus-logo.png",
    accentColor: "#FF6B6B",
    status: "Kommer snart",
    category: "Musikk"
  },
  {
    name: "Omnibus",
    description: "Sanntids kollektivavganger. Enkel, rask, og alltid oppdatert – uansett hvor du er i Norge. Widgets som viser dine avganger, til og fra jobb, til byen og hjem igjen - du bestemmer",
    icon: Train,
    accentColor: "#95E1D3",
    status: "Kommer snart",
    category: "Transport"
  },
  {
    name: "SmartDash",
    description: "Et samlet dashboard for smarthjemmet. SmartDash gir oversikt over enheter, rom og funksjoner på tvers av systemer som Home Assistant, Homey og HomeKit med intelligente widgets.",
    icon: Home,
    accentColor: "#4ECDC4",
    status: "I utvikling",
    category: "Smart hjem"
  },
  {
    name: "HomeTap",
    description: "Hjemmebrygging perfeksjonert. Oppskrifter, batcher, fat, flasker og lokasjoner. Vin, øl, cider, hard cider og alt annet du lager. Hva har du laget, hvor er det og hvor mye har du igjen – alt i én app.",
    icon: Beer,
    accentColor: "#FFE66D",
    status: "I utvikling",
    category: "Mat & drikke"
  },
  {
    name: "Cally",
    description: "En AI-basert kalenderassistent for planlegging, prioritering og tidsblokkering. Cally hjelper deg å strukturere dagene dine med forslag basert på tid, oppgaver og kapasitet.",
    icon: Calendar,
    accentColor: "#8B85C1",
    status: "I utvikling",
    category: "Produktivitet"
  },
  
]

export function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="products" ref={ref} className="relative py-32 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-lavender text-sm tracking-[0.3em] uppercase font-sans">
            Portefølje
          </span>
          <div className="w-16 h-px bg-lavender/30 mt-4 mb-8" />
          <h2 className="font-serif text-3xl md:text-5xl text-offwhite max-w-2xl">
            Apper som løser
            <span className="text-coral"> utfordringer</span>
          </h2>
        </motion.div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-[#161A5E]/50 backdrop-blur-sm border border-lavender/10 rounded-2xl p-8 transition-all duration-500 hover:border-lavender/30 hover:bg-[#161A5E]/70">
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ 
                    background: `radial-gradient(circle at 50% 0%, ${product.accentColor}10 0%, transparent 70%)` 
                  }}
                />
                
                {/* Status badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-sans tracking-wider text-offwhite/40 uppercase">
                    {product.category}
                  </span>
                  <span 
                    className="text-xs font-sans px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: `${product.accentColor}20`,
                      color: product.accentColor
                    }}
                  >
                    {product.status}
                  </span>
                </div>
                
                {/* Icon */}
                {product.logoSrc ? (
                  <div className="w-full h-16 flex items-center justify-start mb-6 transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={product.logoSrc}
                      alt={product.name}
                      className="h-full object-contain"
                    />
                  </div>
                ) : (
                  <div 
                    className="w-24 h-24 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${product.accentColor}15` }}
                  >
                    <product.icon 
                      className="w-12 h-12" 
                      style={{ color: product.accentColor }}
                    />
                  </div>
                )}
                
                {/* Content */}
                <h3 className="font-serif text-2xl text-offwhite mb-3 group-hover:text-coral transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="font-sans text-offwhite/60 leading-relaxed text-sm">
                  {product.description}
                </p>
                
                {/* Bottom accent line */}
                <div 
                  className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: product.accentColor }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
