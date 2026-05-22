import Header from "./sections/Header"
import Hero from "./sections/Hero"
import Benefits from "./sections/Benefits"
import Services from "./sections/Services"
import About from "./sections/About"

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Benefits />
        <Services />
        <About />
      </main>
    </>
  )
}