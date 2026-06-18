import { projects } from "../data/projects"

export function Projects() {
  return (
    <section id="projetos" className="section-shell">
      <div className="section-heading">
        <span>01</span>
        <h2>Projetos</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="pixel-panel group bg-paper p-5 transition hover:-translate-y-1 hover:shadow-pixel"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="font-mono text-2xl font-black">{project.name}</h3>
              <span className="border-2 border-ink bg-acid px-2 py-1 font-mono text-xs font-bold">
                {project.status}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-ink/76">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-ink bg-white/70 px-2 py-1 font-mono text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="font-mono text-sm text-signal">{project.year}</p>
              <a
                className="retro-button bg-paper px-3 py-2 text-xs"
                href={project.repositoryUrl ?? "#"}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir repositório do projeto ${project.name}`}
              >
                {project.repositoryUrl
                  ? "Repositório ↗"
                  : "Repositório privado"}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
