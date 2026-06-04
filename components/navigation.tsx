"use client"

import { useState, useEffect } from "react"
import { useLang } from "@/lib/lang-context"

const ANCHORS = ["#om-oss", "#produkter", "#team", "#kontakt"]

export function Navigation() {
  const { lang, toggleLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    handler()
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[500] py-[10px] transition-[background,border-color] duration-300"
      style={
        scrolled
          ? {
              background: "var(--nav-bg)",
              borderBottom: "1px solid var(--border)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }
          : { background: "transparent" }
      }
    >
      <div className="strav-container flex items-center">
        <a
          href="#topp"
          className="flex items-center gap-[10px] mr-auto no-underline"
          style={{
            fontFamily: "var(--serif)",
            fontSize: 27,
            fontWeight: 500,
            color: "var(--text)",
          }}
        >
          <img
            src="/hero-s.svg"
            alt="Straverso logo"
            style={{ height: 42, width: "auto", display: "block", flexShrink: 0 }}
          />
          <span>Straverso</span>
        </a>

        <div className="hidden md:flex gap-10">
          {t.nav.map((label, i) => (
            <a
              key={label}
              href={ANCHORS[i]}
              className="no-underline transition-colors duration-200 hover:text-[color:var(--accent)] whitespace-nowrap"
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--text2)",
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleLang}
          aria-label={lang === "no" ? "Switch to English" : "Bytt til norsk"}
          className="ml-7 transition-colors duration-200 cursor-pointer"
          style={{
            background: "transparent",
            border: "1px solid var(--border)",
            color: "var(--text2)",
            fontFamily: "var(--sans)",
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "2px",
            padding: "6px 12px",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)"
            ;(e.currentTarget as HTMLButtonElement).style.color = "var(--accent)"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)"
            ;(e.currentTarget as HTMLButtonElement).style.color = "var(--text2)"
          }}
        >
          {lang === "no" ? "EN" : "NO"}
        </button>
      </div>
    </nav>
  )
}
