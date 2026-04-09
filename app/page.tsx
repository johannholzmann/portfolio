import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Mono, Inter } from "next/font/google";

const displayFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const experience = [
  {
    period: "2023 - Actualidad",
    role: "Aprendiz Front End",
    company: "Programacion mock",
    summary:
      "Modernizo interfaces, construyo experiencias claras y sostengo una base tecnica mantenible con foco real en producto.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    period: "2021 - 2023",
    role: "Soporte tecnico a usuarios",
    company: "Universidad Nacional del Sur",
    summary:
      "Resolvi incidencias, acompanhe usuarios y ordene procesos para que la tecnologia fuese mas confiable y facil de usar.",
    stack: ["Soporte", "Sistemas", "Usuarios"],
  },
];

const projects = [
  {
    title: "Hoteleria Hospitalaria",
    description:
      "Proyecto final de carrera orientado a la gestion hospitalaria, con foco en accesibilidad, trazabilidad y claridad operativa.",
    github: "https://github.com/johannholzmann",
    website: "https://github.com/johannholzmann",
    accent: "from-cyan-400/40 via-sky-500/20 to-transparent",
    label: "Hospitality system",
    tags: ["Next.js", "UX", "Arquitectura", "Accesibilidad"],
  },
  {
    title: "Portfolio Metrics Dashboard",
    description:
      "Concepto para visualizar rendimiento, actividad y avance de proyectos con una capa visual mas expresiva y orientada a producto.",
    github: "https://github.com/johannholzmann",
    website: "https://github.com/johannholzmann",
    accent: "from-fuchsia-500/35 via-violet-500/20 to-transparent",
    label: "Metrics dashboard",
    tags: ["Analytics", "UI Systems", "React", "Data Viz"],
  },
];

export default function Home() {
  return (
    <div className={`${bodyFont.className} relative w-full overflow-hidden`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.22),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(249,115,22,0.18),_transparent_28%),linear-gradient(180deg,_#060816_0%,_#0b1023_46%,_#160b1e_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 mx-auto h-80 max-w-6xl bg-[radial-gradient(circle,_rgba(59,130,246,0.12),_transparent_62%)] blur-3xl" />

      <section className="grid gap-10 rounded-[2rem] border border-white/10 bg-slate-950/60 px-6 py-8 shadow-[0_30px_120px_rgba(3,7,18,0.65)] backdrop-blur md:grid-cols-[minmax(0,1fr)_280px] md:px-10 md:py-10">
        <div className="space-y-6">
          <div className={`${displayFont.className} inline-flex rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-amber-200`}>
            Open to work
          </div>

          <div className="space-y-4">
            <p className={`${displayFont.className} text-sm uppercase tracking-[0.38em] text-sky-300`}>
              Software Engineer
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.92] tracking-[-0.04em] text-slate-50 md:text-7xl">
              Johann Holzmann
            </h1>
            <p className="max-w-3xl text-lg font-medium text-slate-300 md:text-xl">
              Ingeniero en Computacion · Universidad Nacional del Sur
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Diseno y construyo productos digitales con criterio tecnico,
              sensibilidad visual y foco real en claridad. Estoy buscando una
              nueva oportunidad para aportar en equipos que valoren producto,
              sistema y ejecucion.
            </p>
          </div>

          <div className="grid gap-4 pt-2 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className={`${displayFont.className} text-xs uppercase tracking-[0.32em] text-slate-400`}>
                Enfoque
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Interfaces memorables, sistemas consistentes y decisiones de
                producto sostenidas por una base tecnica solida.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className={`${displayFont.className} text-xs uppercase tracking-[0.32em] text-slate-400`}>
                Disponible para
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Frontend, producto digital y roles donde la experiencia visual
                tenga tanto peso como la implementacion.
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-[280px] items-center justify-center md:max-w-none">
          <div className="absolute h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute h-56 w-56 rounded-full bg-orange-400/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/10 via-transparent to-orange-300/10" />
            <Image
              src="/avatar.png"
              alt="Johann Holzmann"
              width={420}
              height={420}
              priority
              className="relative h-auto w-full rounded-[1.5rem] opacity-80 saturate-0"
            />
          </div>
        </div>
      </section>

      <div className="mt-10 space-y-10">
        <SectionTitle title="Educacion" />
        <section className="grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)]">
          <p className={`${displayFont.className} text-sm uppercase tracking-[0.3em] text-amber-200`}>
            2015 - 2020
          </p>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-100">
              Ingenieria en Computacion
            </h2>
            <p className="text-base font-medium text-sky-200">
              Universidad Nacional del Sur · Duracion estimada: 5 anos
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-300">
              Formacion enfocada en sistemas, ingenieria de software y
              resolucion estructurada de problemas. La carrera consolido un
              enfoque tecnico con sensibilidad por producto y usabilidad.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className={`${displayFont.className} text-xs uppercase tracking-[0.32em] text-cyan-200`}>
                Proyecto final de carrera
              </p>
              <p className="mt-3 text-xl font-semibold text-slate-100">
                Hoteleria Hospitalaria
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
                Diseno e implementacion de una experiencia digital para gestion
                hospitalaria, centrada en accesibilidad, trazabilidad y
                claridad operativa.
              </p>
            </div>
          </div>
        </section>

        <SectionTitle title="Experiencia" />
        <section className="space-y-8">
          <p className="text-sm text-slate-400">
            Trayectoria actual y experiencia previa. Parte del contenido sigue
            mockeado por ahora.
          </p>
          {experience.map((item) => (
            <article
              key={`${item.period}-${item.role}`}
              className="grid gap-4 border-b border-white/10 pb-8 lg:grid-cols-[180px_minmax(0,1fr)]"
            >
              <p className={`${displayFont.className} pt-1 text-sm uppercase tracking-[0.3em] text-amber-200`}>
                {item.period}
              </p>
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-2xl font-semibold text-slate-100">
                    {item.role}
                  </h3>
                  <p className="text-base font-medium text-sky-200">
                    {item.company}
                  </p>
                </div>
                <p className="max-w-3xl text-base leading-8 text-slate-300">
                  {item.summary}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.stack.map((tag) => (
                    <span
                      key={tag}
                      className={`${displayFont.className} rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <SectionTitle title="Proyectos" />
        <section className="space-y-6">
          <p className="text-sm text-slate-400">
            Una seleccion de trabajos reales y conceptuales.
          </p>
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-4 md:grid-cols-[220px_minmax(0,1fr)] md:p-5"
            >
              <div
                className={`relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950 p-4 ${project.accent}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.03] to-transparent" />
                <div className="relative flex h-full min-h-32 flex-col justify-between">
                  <span className={`${displayFont.className} text-[11px] uppercase tracking-[0.3em] text-slate-300`}>
                    Preview
                  </span>
                  <p className={`${displayFont.className} text-lg leading-6 text-white`}>
                    {project.label}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-slate-100">
                    {project.title}
                  </h3>
                  <p className="max-w-3xl text-base leading-8 text-slate-300">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`${displayFont.className} rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`${displayFont.className} flex flex-wrap gap-4 text-sm uppercase tracking-[0.28em]`}>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-cyan-200 transition hover:text-cyan-100"
                  >
                    GitHub
                  </Link>
                  <Link
                    href={project.website}
                    target="_blank"
                    className="text-amber-200 transition hover:text-amber-100"
                  >
                    Web
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="space-y-3 pt-2">
      <div className="h-px w-full bg-white/10" />
      <h2 className="text-3xl font-semibold text-slate-100">{title}</h2>
    </div>
  );
}
