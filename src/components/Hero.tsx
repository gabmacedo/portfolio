import { MouseEvent } from "react"
import profilePhoto from "../assets/pfp1080.png"

export function Hero() {
  function handleAnchorClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    const target = document.querySelector(href)

    if (!target) {
      return
    }

    event.preventDefault()
    target.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.pushState(null, "", href)
  }

  return (
    <section
      id="home"
      className="section-shell min-h-[calc(100vh-90px)] pt-16 sm:pt-24"
    >
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <h1 className="max-w-4xl font-display text-6xl leading-none tracking-normal sm:text-8xl lg:text-9xl font-[Instrument-serif]">
            Gabriel M.
          </h1>
          <span className="font-mono text-sm lg:text-red text-ink/65">
            TypeScript - Fastify - ORM - PostgreSQL - Redis
          </span>
          <p className="mt-6 max-w-2xl font-mono text-base leading-7 text-ink/78 sm:text-lg">
            Estudante de tecnologia criando interfaces, APIs e projetos práticos
            enquanto aprende, testa e evolui.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              className="primary-button cursor-pointer"
              href={"#contato"}
              onClick={(event) => handleAnchorClick(event, "#contato")}
              target="_blank"
              rel="noreferrer"
            >
              Contato
            </a>
            <span className="font-mono text-sm text-ink/65">
              dev/web/backend/learn
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] lg:mr-0">
          <div className="absolute -left-4 top-8 z-10 border-2 border-ink bg-acid px-3 py-2 font-mono text-xs font-black uppercase shadow-[4px_4px_0_#101114] sm:-left-8">
            online
          </div>
          <div
            className="absolute -right-3 top-16 z-10 h-16 w-16 border-2 border-ink bg-signal shadow-pixel sm:-right-8"
            aria-hidden="true"
          />
          <div className="absolute -bottom-5 left-8 z-10 border-2 border-ink bg-terminal px-3 py-2 font-mono text-xs text-neon shadow-pixel">
            build: curious
          </div>
          <div
            className="absolute -bottom-8 right-10 z-10 h-12 w-24 border-2 border-neon bg-neon/20 shadow-neon"
            aria-hidden="true"
          />

          <figure className="pixel-panel relative overflow-hidden bg-terminal p-3 shadow-pixel">
            <img
              src={profilePhoto}
              alt="Foto de perfil de Gabriel Macedo"
              className="aspect-square w-full border-2 border-ink object-cover grayscale-[12%] contrast-105"
            />
            <figcaption className="absolute bottom-6 right-6 border-2 border-ink bg-paper px-3 py-2 font-mono text-xs font-bold text-ink shadow-[3px_3px_0_#101114]">
              gab.png
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
