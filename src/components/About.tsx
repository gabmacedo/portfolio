import { RESUME_URL } from '../constants/links';

const personalInfo = [
  ['Nome', 'Gabriel Macedo'],
  ['Idade', '20 anos'],
  ['Curso', 'Sistemas de Informação'],
  ['Faculdade', 'Faculdade Impacta de Tecnologia'],
  ['Ano de início', '2024'],
];

export function About() {
  return (
    <section id="sobre" className="section-shell">
      <div className="section-heading">
        <span>02</span>
        <h2>Sobre</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="pixel-panel bg-terminal p-5 text-paper shadow-pixel">
          <dl className="space-y-4">
            {personalInfo.map(([label, value]) => (
              <div key={label} className="border-b border-paper/18 pb-3">
                <dt className="font-mono text-xs uppercase text-neon">{label}</dt>
                <dd className="mt-1 text-base font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="pixel-panel bg-white/72 p-6">
          <p className="text-lg leading-8 text-ink/78">
            Sou estudante de tecnologia, focado em desenvolvimento web, backend e criação de projetos práticos. Gosto
            de transformar aprendizado em produto, protótipo e código funcionando.
          </p>
          <a className="primary-button mt-7 inline-flex" href={RESUME_URL} target="_blank" rel="noreferrer">
            Ver currículo
          </a>
        </div>
      </div>
    </section>
  );
}
