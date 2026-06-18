import { smoothScrollToHash } from "../utils/smoothScroll"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projetos", href: "#projetos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  return (
    <header className="sticky top-0">
      <nav
        className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
        aria-label="Navegação principal"
      >
        <a
          href="#home"
          onClick={(event) => smoothScrollToHash(event, "#home")}
          className="group inline-flex w-fit items-center gap-2 font-mono text-sm font-bold uppercase"
        >
          <span
            className="h-3 w-3 border-2 border-ink bg-neon shadow-[3px_3px_0_#101114]"
            aria-hidden="true"
          />
          Gabriel
          <span
            className="text-signal transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            _
          </span>
        </a>

        <ul className="flex flex-wrap gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className="retro-button bg-paper px-3 py-2 text-xs"
                href={item.href}
                onClick={(event) => smoothScrollToHash(event, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
