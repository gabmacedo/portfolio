import { GITHUB_URL, LINKEDIN_URL } from "../constants/links"

export function Contact() {
  return (
    <section id="contato" className="section-shell pb-16">
      <div className="section-heading">
        <span>03</span>
        <h2>Contato</h2>
      </div>

      <div className="pixel-panel bg-ink p-6 text-paper shadow-pixel">
        <p className="max-w-2xl font-mono text-sm leading-6 text-paper/72">
          Canal aberto para projetos, estudos, oportunidades e ideias que saem
          do rascunho.
        </p>

        <div className="mt-7 grid gap-3 sm:grid-cols-3">
          <a className="contact-link">contato@gabmacedo.dev</a>
          <a
            className="contact-link"
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="contact-link"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
