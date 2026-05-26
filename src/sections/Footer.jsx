import Container from "../components/Container"
import { siteData } from "../data/siteData"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-10 text-white">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <strong className="block text-lg font-bold">
              {siteData.businessName}
            </strong>

            <p className="mt-2 text-sm text-zinc-400">
              {siteData.niche} em {siteData.city}
            </p>
          </div>

          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} {siteData.businessName}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}