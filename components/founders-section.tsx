"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/lang-context"

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.9, ease: "easeOut" as const },
}

export function FoundersSection() {
  const { t } = useLang()
  const tx = t.team

  return (
    <motion.section
      id="team"
      {...reveal}
      style={{ padding: "130px 0", background: "var(--surface)" }}
    >
      <div className="strav-container">
        <div className="section-label">{tx.label}</div>
        <h2 className="section-h2">{tx.h2}</h2>

        <div
          className="grid"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
            marginTop: 52,
          }}
        >
          {tx.members.map((m) => (
            <div key={m.name} className="strav-card" style={{ padding: 44 }}>
              <div
                className="flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #8B85C1, #BDB8E4)",
                  fontFamily: "var(--serif)",
                  fontSize: 16,
                  color: "#0A0C2E",
                  marginBottom: 28,
                }}
              >
                {m.initials}
              </div>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  fontWeight: 500,
                  color: "var(--text)",
                  marginBottom: 6,
                }}
              >
                {m.name}
              </h3>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 18,
                }}
              >
                {m.role}
              </p>
              <p className="body-text">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
