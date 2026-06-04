"use client"

import { useLang } from "@/lib/lang-context"

export function Footer() {
  const { t } = useLang()
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 0" }}>
      <div className="strav-container">
        <p
          style={{
            fontSize: 11,
            color: "var(--text2)",
            letterSpacing: "0.3px",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          {t.footer}
        </p>
      </div>
    </footer>
  )
}
