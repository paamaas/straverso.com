export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-lavender/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl text-offwhite">Straverso</span>
          </div>
          
          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#products" className="font-sans text-sm text-offwhite/60 hover:text-coral transition-colors">
              Produkter
            </a>
            <a href="#" className="font-sans text-sm text-offwhite/60 hover:text-coral transition-colors">
              Om oss
            </a>
            <a href="#" className="font-sans text-sm text-offwhite/60 hover:text-coral transition-colors">
              Kontakt
            </a>
          </nav>
          
          {/* Copyright */}
          <p className="font-sans text-sm text-offwhite/40">
            © {new Date().getFullYear()} Straverso. Alle rettigheter reservert.
          </p>
        </div>
      </div>
    </footer>
  )
}
