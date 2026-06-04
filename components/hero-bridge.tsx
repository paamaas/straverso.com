"use client"

import { HeroSection } from "@/components/HeroSection"
import { useLang } from "@/lib/lang-context"

export function HeroBridge() {
  const { lang } = useLang()
  return <HeroSection lang={lang} />
}
