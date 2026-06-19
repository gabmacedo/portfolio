export type ProjectStatus = "Em andamento" | "Concluído" | "Universitário"

export type Project = {
  name: string
  description: string
  stack: string[]
  year: number
  status: ProjectStatus
  repositoryUrl: string
}

export const projects: Project[] = [
  {
    name: "Plaete",
    description:
      "Plaete é uma CLI interativa para estruturar projetos de backend com sua linguagem preferida, estrutura HTTP e ORM. Ele cria os arquivos do projeto, renderiza os modelos e pode instalar dependências automaticamente.",
    stack: ["JS", "Handlebars", "@clack/prompts"],
    year: 2026,
    status: "Em andamento",
    repositoryUrl: "https://github.com/gabmacedo/plaete",
  },
  {
    name: "Applicado",
    description:
      "Aplicação fullstack para controle de vagas aplicadas, desenvolvida a partir de um problema real durante o processo de busca por estágio.",
    stack: [
      "TS",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "React",
      "Vite",
      "TailwindCSS",
    ],
    year: 2026,
    status: "Em andamento",
    repositoryUrl: "https://github.com/gabmacedo/applicado-backend",
  },
  {
    name: "URL Shortener",
    description:
      "Encurtador de URL com analytics de clicks, device, OS, browser e outras métricas.",
    stack: [
      "TS",
      "Fastify",
      "Redis",
      "Prisma",
      "PostgreSQL",
      "React",
      "Vite",
      "TailwindCSS",
    ],
    year: 2026,
    status: "Em andamento",
    repositoryUrl: "https://github.com/gabmacedo/url-shortner-backend",
  },
  {
    name: "Padoca",
    description:
      "Plataforma de delivery para padarias com catálogo, carrinho e fluxo de pedidos.",
    stack: [
      "TS",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "React",
      "Vite",
      "TailwindCSS",
      "Firebase",
    ],
    year: 2026,
    status: "Universitário",
    repositoryUrl: "",
  },
  {
    name: "Calculadora de SLA",
    description:
      "Calculadora para descobrir o SLA de um serviço com base em uptime e downtime.",
    stack: ["JavaScript", "Vite", "React", "TailwindCSS"],
    year: 2026,
    status: "Concluído",
    repositoryUrl: "https://github.com/gabmacedo/contador-sla",
  },
  {
    name: "Nota Certa",
    description:
      "Calculadora para descobrir a nota necessária na prova final para passar de ano.",
    stack: ["JavaScript", "Vite", "React", "TailwindCSS"],
    year: 2025,
    status: "Concluído",
    repositoryUrl: "https://github.com/gabmacedo/minha-nota-impacta",
  },
]
