"use client"

import { motion } from "framer-motion"
import { track } from "@vercel/analytics"
import { useLang } from "@/lib/lang-context"

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.9, ease: "easeOut" as const },
}

export function ContactSection() {
  const { lang, t } = useLang()
  const tx = t.contact

  return (
    <motion.section
      id="kontakt"
      {...reveal}
      style={{ padding: "160px 0", background: "var(--bg)" }}
    >
      <div className="strav-container">
        <div style={{ maxWidth: 580, margin: "0 auto", textAlign: "center" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            {tx.label}
          </div>
          <h2 className="section-h2">{tx.h2}</h2>
          <p className="body-text" style={{ margin: "0 auto 52px", textAlign: "center" }}>
            {tx.body}
          </p>
          <div className="flex flex-wrap justify-center" style={{ gap: 14 }}>
            <a
              href="mailto:post@straverso.com"
              className="btn-primary"
              onClick={() => track("contact_click", { source: "contact_section", variant: "cta", lang })}
            >
              {tx.cta}
            </a>
            <a
              href="mailto:post@straverso.com"
              className="btn-secondary"
              onClick={() => track("contact_click", { source: "contact_section", variant: "address", lang })}
            >
              post@straverso.com
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
