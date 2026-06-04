"use client"

import { motion } from "framer-motion"
import { track } from "@vercel/analytics"
import { useLang } from "@/lib/lang-context"
import { STATUS_COLOR } from "@/lib/translations"

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.08 },
  transition: { duration: 0.9, ease: "easeOut" as const },
}

export function ProductsSection() {
  const { lang, t } = useLang()
  const tx = t.prod
  const products = t.products

  return (
    <motion.section
      id="produkter"
      {...reveal}
      onViewportEnter={() => track("products_viewed", { lang })}
      style={{ padding: "130px 0", background: "var(--bg)" }}
    >
      <div className="strav-container">
        <div className="section-label">{tx.label}</div>

        <div
          className="grid items-end"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 40,
            marginBottom: 60,
          }}
        >
          <h2 className="section-h2" style={{ margin: 0 }}>
            {tx.h2}
          </h2>
          <p className="body-text" style={{ margin: 0 }}>
            {tx.sub}
          </p>
        </div>

        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}
        >
          {products.map((p) => {
            const sc = STATUS_COLOR[p.status]
            return (
              <div
                key={p.name}
                className="strav-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,107,107,0.35)"
                  e.currentTarget.style.transform = "translateY(-3px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)"
                  e.currentTarget.style.transform = "none"
                }}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: 20 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "var(--text2)",
                    }}
                  >
                    {p.cat}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      padding: "3px 10px",
                      borderRadius: 100,
                      background: sc.bg,
                      color: sc.c,
                      border: `1px solid ${sc.b}`,
                    }}
                  >
                    {p.status}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 26,
                    fontWeight: 500,
                    color: "var(--text)",
                    marginBottom: 10,
                  }}
                >
                  {p.name}
                </h3>
                <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
