"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/lang-context"

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.9, ease: "easeOut" as const },
}

export function PhilosophySection() {
  const { t } = useLang()
  const tx = t.phil

  return (
    <motion.section
      id="om-oss"
      {...reveal}
      style={{ padding: "130px 0", background: "var(--surface)" }}
    >
      <div className="strav-container">
        <div className="section-label">{tx.label}</div>
        <div
          className="grid items-start"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 80 }}
        >
          <div>
            <h2 className="section-h2">{tx.h2}</h2>
            <p className="body-text">{tx.p1}</p>
            <p
              className="italic"
              style={{
                marginTop: 24,
                fontSize: 15,
                color: "var(--accent)",
                lineHeight: 1.7,
              }}
            >
              {tx.italic}
            </p>
          </div>
          <div className="flex flex-col" style={{ gap: 40, paddingTop: 4 }}>
            {tx.pillars.map(({ n, h, t: pt }) => (
              <div key={n} className="flex" style={{ gap: 20 }}>
                <span
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 12,
                    color: "var(--accent)",
                    opacity: 0.7,
                    flexShrink: 0,
                    paddingTop: 4,
                  }}
                >
                  {n}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 20,
                      fontWeight: 500,
                      color: "var(--text)",
                      marginBottom: 8,
                    }}
                  >
                    {h}
                  </h3>
                  <p className="body-text">{pt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
