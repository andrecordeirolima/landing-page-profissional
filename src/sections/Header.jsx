import Container from "../components/Container"
import Button from "../components/Button"
import { siteData } from "../data/siteData"

export default function Header() {
  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
    siteData.whatsappMessage
  )}`

  return (
    <header className="border-b border-zinc-200 bg-white">
      <Container className="flex h-20 items-center justify-between">
        <div>
          <strong className="block text-base font-bold text-rose-600 sm:text-lg">
  {siteData.businessName}
</strong>
          <span className="text-xs uppercase tracking-widest text-zinc-500">
            {siteData.niche}
          </span>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-700 md:flex">
          <a href="#services">Serviços</a>
          <a href="#about">Sobre</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="hidden md:block">
          <Button href={whatsappUrl}>Agendar pelo WhatsApp</Button>
        </div>

        <button className="md:hidden text-2xl" aria-label="Abrir menu">
          ☰
        </button>
      </Container>
    </header>
  )
}