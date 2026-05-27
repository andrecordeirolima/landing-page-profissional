import Container from "../components/Container"
import { siteData } from "../data/siteData"

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-2xl lg:max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rose-600">
            Ambiente
          </p>

          <h2 className="mt-3 text-3xl font-black text-zinc-950 sm:text-4xl">
            Um espaço pensado para seu conforto
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {siteData.gallery.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}