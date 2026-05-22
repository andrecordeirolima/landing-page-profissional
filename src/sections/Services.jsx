import Container from "../components/Container"
import { siteData } from "../data/siteData"

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-16 sm:py-20"
    >
      <Container>
        <div className="max-w-2xl lg:max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">
            Serviços
          </p>

          <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">
            Soluções pensadas para seu bem-estar
          </h2>

          <p className="mt-4 text-base leading-7 text-zinc-600">
            Atendimento focado em conforto, segurança e resultados.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteData.services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6"
            >
              <h3 className="text-xl font-bold text-zinc-950">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                {service.description}
              </p>

              <button className="mt-6 text-sm font-semibold text-rose-600 hover:text-rose-700">
                Saiba mais →
              </button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}