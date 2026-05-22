import Container from "../components/Container"
import { siteData } from "../data/siteData"

export default function About() {
  return (
    <section id="about" className="bg-zinc-50 py-16 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-rose-100 text-center text-zinc-500">
            Imagem sobre o negócio
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">
            Sobre nós
          </p>

          <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">
            Atendimento feito com cuidado, técnica e atenção aos detalhes
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-600">
            A {siteData.businessName} oferece um atendimento pensado para quem
            busca segurança, acolhimento e solução para suas necessidades.
          </p>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            Cada atendimento é realizado com responsabilidade, escuta e foco em
            entregar uma experiência profissional do início ao fim.
          </p>
        </div>
      </Container>
    </section>
  )
}