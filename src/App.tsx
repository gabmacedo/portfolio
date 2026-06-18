import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-paper text-ink">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-grid opacity-80"
        aria-hidden="true"
      />
      <div className="relative z-10">
        <Header />
      </div>
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}
