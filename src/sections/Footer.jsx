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

          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} {siteData.businessName}. Todos os direitos reservados.
            </p>

            <div className="flex gap-4 text-sm text-zinc-400">
              <a
                href="/politica-de-privacidade.html"
                className="hover:text-white"
              >
                Política de Privacidade
              </a>

              <a
                href="/termos-de-uso.html"
                className="hover:text-white"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}