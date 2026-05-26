"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Produkter", href: "#products" },
  { label: "Om oss", href: "#philosophy" },
  { label: "Team", href: "#team" },
  { label: "Kontakt", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-indigo/80 backdrop-blur-lg border-b border-lavender/10" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src="/straverso-logo.svg" 
              alt="Straverso" 
              className="h-16 lg:h-20 w-auto"
            />
          </a>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-offwhite/70 hover:text-coral transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Language toggle - desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button className="font-sans text-sm text-lavender hover:text-coral transition-colors">
              EN
            </button>
            <span className="text-lavender/30">|</span>
            <button className="font-sans text-sm text-offwhite">
              NO
            </button>
          </div>
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-offwhite hover:text-coral hover:bg-transparent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </motion.header>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-indigo pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-serif text-3xl text-offwhite hover:text-coral transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            
            {/* Language toggle - mobile */}
            <div className="flex items-center gap-4 mt-12">
              <button className="font-sans text-lg text-lavender hover:text-coral transition-colors">
                English
              </button>
              <span className="text-lavender/30">|</span>
              <button className="font-sans text-lg text-offwhite">
                Norsk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
