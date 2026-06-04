import { Navigation } from "@/components/navigation"
import { HeroBridge } from "@/components/hero-bridge"
import { PhilosophySection } from "@/components/philosophy-section"
import { ProductsSection } from "@/components/products-section"
import { FoundersSection } from "@/components/founders-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroBridge />
      <PhilosophySection />
      <ProductsSection />
      <FoundersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
