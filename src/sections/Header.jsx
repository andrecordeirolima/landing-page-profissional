import Container from "../components/Container"
import Button from "../components/Button"
import { siteData } from "../data/siteData"
import { useState } from "react"

export default function Header() {
  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
    siteData.whatsappMessage
  )}`

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-zinc-200 bg-white">
      <Container className="flex h-20 items-center justify-between">
        <div className="max-w-[240px]">
  <strong className="block text-sm font-bold leading-tight text-rose-600 sm:text-base">
    {siteData.businessName}
  </strong>

  <span className="mt-1 block text-[10px] uppercase tracking-widest text-zinc-500">
    {siteData.niche}
  </span>
</div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-700 md:flex">
          <a href="#services" className="hover:text-rose-600">Serviços</a>
          <a href="#about" className="hover:text-rose-600">Sobre</a>
          <a href="#gallery" className="hover:text-rose-600">Galeria</a>
          <a href="#contact" className="hover:text-rose-600">Contato</a>
        </nav>

        <div className="hidden md:block">
          <Button href={whatsappUrl}>Agendar pelo WhatsApp</Button>
        </div>

        <button
  className="flex h-10 w-10 items-center justify-center text-2xl md:hidden"
  aria-label="Abrir menu"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  ☰
</button>
      </Container>
      {isMenuOpen && (
  <nav className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden">
    <div className="flex flex-col gap-4 text-sm font-medium text-zinc-700">
      <a href="#services" onClick={() => setIsMenuOpen(false)}>
        Serviços
      </a>

      <a href="#about" onClick={() => setIsMenuOpen(false)}>
        Sobre
      </a>

      <a href="#gallery" onClick={() => setIsMenuOpen(false)}>
        Galeria
      </a>

      <a href="#contact" onClick={() => setIsMenuOpen(false)}>
        Contato
      </a>
    </div>
  </nav>
)}
    </header>
  )
}