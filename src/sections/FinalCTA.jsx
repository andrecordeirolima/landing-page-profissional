import Container from "../components/Container"
import Button from "../components/Button"
import { siteData } from "../data/siteData"

export default function FinalCTA() {
  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
    siteData.whatsappMessage
  )}`

  return (
    <section id="contact" className="bg-rose-600 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-100">
            Agende seu atendimento
          </p>

          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            Pronto para cuidar melhor de você?
          </h2>

          <p className="mt-5 text-base leading-7 text-rose-100">
            Fale conosco pelo WhatsApp e tire suas dúvidas de forma rápida.
          </p>

          <div className="mt-8">
            <Button href={whatsappUrl} variant="light">
              Chamar no WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}