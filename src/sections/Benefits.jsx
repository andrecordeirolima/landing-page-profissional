import Container from "../components/Container"
import { siteData } from "../data/siteData"

export default function Benefits() {
  return (
    <section className="bg-zinc-50 py-16">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">
            Benefícios
          </p>

          <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">
            Por que escolher nosso atendimento?
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-3xl bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-zinc-900">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}