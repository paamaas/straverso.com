"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StraversoIcon } from "./straverso-icon"

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-indigo/50 pointer-events-none" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lavender/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Spiral - centered absolutely, no framer-motion wrapper to avoid transform-origin offset */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]">
          <StraversoIcon className="w-full h-full" />
        </div>
      </div>

      {/* Content - in normal flow above spiral */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full">
        {/* Minimal spacer - spiral centers behind all text and button */}
        <div className="h-0" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 text-offwhite"
        >
          Straverso
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-xl md:text-2xl text-offwhite/80 mb-4 tracking-wide"
        >
          Vi gjør det komplekse enkelt og intuitivt.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-sm md:text-base text-lavender/70 mb-12 italic"
        >
          We make the complex simple and intuitive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-coral hover:bg-coral/90 text-indigo font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-coral/25"
            onClick={() => {
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Utforsk produktene
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-lavender/50"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
