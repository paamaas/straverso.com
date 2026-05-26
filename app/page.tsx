import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { ProductsSection } from "@/components/products-section"
import { FoundersSection } from "@/components/founders-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-indigo">
      <Navigation />
      <HeroSection />
      <div id="philosophy">
        <PhilosophySection />
      </div>
      <ProductsSection />
      <div id="team">
        <FoundersSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
