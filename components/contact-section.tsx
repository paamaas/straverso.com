"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name || !email || !message) {
      toast({
        title: "Feil",
        description: "Vennligst fyll ut alle feltene",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Noe gikk galt")
      }

      toast({
        title: "Suksess!",
        description: data.message,
      })
      
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      toast({
        title: "Feil",
        description: error instanceof Error ? error.message : "Kunne ikke sende meldingen",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-lavender text-sm tracking-[0.3em] uppercase font-sans">
            Kontakt
          </span>
          <div className="w-16 h-px bg-lavender/30 mt-4 mb-8 mx-auto" />
          <h2 className="font-serif text-3xl md:text-5xl text-offwhite mb-6">
            La oss snakke
          </h2>
          <p className="font-sans text-offwhite/60 mb-12 max-w-lg mx-auto">
            Har du et problem som trenger å løses? Eller bare nysgjerrig på hva vi bygger? 
            Vi hører gjerne fra deg.
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            placeholder="Ditt navn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            className="w-full h-14 bg-[#161A5E]/50 border-lavender/20 text-offwhite placeholder:text-offwhite/30 rounded-xl px-6 focus:border-coral focus:ring-coral/20 disabled:opacity-50"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="din@epost.no"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="flex-1 h-14 bg-[#161A5E]/50 border-lavender/20 text-offwhite placeholder:text-offwhite/30 rounded-xl px-6 focus:border-coral focus:ring-coral/20 disabled:opacity-50"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="h-14 px-8 bg-coral hover:bg-coral/90 text-indigo font-semibold rounded-xl transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span>{isLoading ? "Sender..." : "Send melding"}</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          <textarea
            placeholder="Din melding..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isLoading}
            rows={4}
            className="w-full bg-[#161A5E]/50 border border-lavender/20 text-offwhite placeholder:text-offwhite/30 rounded-xl px-6 py-4 focus:border-coral focus:ring-coral/20 focus:outline-none resize-none disabled:opacity-50"
          />
        </motion.form>

        {/* Direct email */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-3 text-offwhite/50"
        >
          <Mail className="w-4 h-4" />
          <span className="font-sans text-sm">
            Eller skriv direkte til{" "}
            <a href="mailto:post@straverso.com" className="text-lavender hover:text-coral transition-colors">
              post@straverso.no
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  )
}
