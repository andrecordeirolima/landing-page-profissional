import Container from "../components/Container"
import Button from "../components/Button"
import { siteData } from "../data/siteData"

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
    siteData.whatsappMessage
  )}`

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-rose-600 sm:tracking-[0.25em]">
  {siteData.hero.eyebrow}
</p>

          <h1 className="max-w-2xl text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
  {siteData.hero.title}
</h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
            {siteData.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href={whatsappUrl}>{siteData.hero.primaryButton}</Button>

            <a
              href="#services"
              className="text-sm font-semibold text-zinc-900 hover:text-rose-600"
            >
              {siteData.hero.secondaryButton} →
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-rose-100 p-6">
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-white text-center text-zinc-400">
            Imagem do negócio aqui
          </div>
        </div>
      </Container>
    </section>
  )
}