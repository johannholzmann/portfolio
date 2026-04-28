import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { getHomeContent } from "@/lib/home-content";
import { cvHref, emailHref, githubUrl, linkedinUrl } from "@/content/links";

const displayFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function Home() {
  const { education, experience, projects } = await getHomeContent();

  return (
    <div className={`${bodyFont.className} relative w-full overflow-hidden`}>
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top_left,_rgba(125,211,252,0.22),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(249,115,22,0.18),_transparent_28%),linear-gradient(180deg,_#060816_0%,_#0b1023_46%,_#160b1e_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 mx-auto h-80 max-w-6xl bg-[radial-gradient(circle,_rgba(59,130,246,0.12),_transparent_62%)] blur-3xl" />

      <section
        id="hero"
        className="scroll-mt-28 grid gap-10 rounded-[2rem] border border-white/10 bg-slate-950/60 px-6 py-8 shadow-[0_30px_120px_rgba(3,7,18,0.65)] backdrop-blur md:grid-cols-[minmax(0,1fr)_280px] md:px-10 md:py-10"
      >
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
              Ingeniero en Computación · Universidad Nacional del Sur
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Diseño y construyo productos digitales con criterio técnico y sensibilidad por la experiencia de usuario. Fundamentalista de la simplicidad, la claridad, el código limpio y la escalabilidad. Apasionado por la tecnología, el diseño y la innovación, siempre buscando aprender y mejorar en cada proyecto.
            </p>
          </div>

          <div className={`${displayFont.className} flex flex-wrap gap-3 pt-1 text-sm uppercase tracking-[0.28em]`}>
            <Link
              href={cvHref}
              className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-slate-50 transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
            >
              Ver CV
            </Link>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-200 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/30"
            >
              LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-200 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/30"
            >
              GitHub
            </a>
            <a
              href={emailHref}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-200 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/30"
            >
              Email
            </a>
          </div>

          <div className="grid gap-4 pt-2 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className={`${displayFont.className} text-xs uppercase tracking-[0.32em] text-slate-400`}>
                Enfoque
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Construir API REST robustas y eficientes, diseñar bases de datos escalables, optimizar rendimiento y aplicar buenas prácticas de desarrollo para crear productos digitales sólidos y mantenibles.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className={`${displayFont.className} text-xs uppercase tracking-[0.32em] text-slate-400`}>
                Disponible para
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Busco unirme a un equipo donde pueda seguir creciendo como desarrollador Full Stack, aportando solidez en backend, aplicando buenas prácticas y visión de producto integral, dispuesto a sumergirme en cualquier tecnología.
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
              src="/avatar_cut.jpg"
              alt="Johann Holzmann"
              width={560}
              height={560}
              priority
              className="relative h-auto w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <div className="mt-10 space-y-10">
        <SectionTitle title="Educación" />
        <section
          id="educacion"
          className="scroll-mt-28 grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)]"
        >
          <p className={`${displayFont.className} text-sm uppercase tracking-[0.3em] text-amber-200`}>
            {education.period}
          </p>
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-slate-100">
              {education.degree}
            </h2>
            <p className="text-base font-medium text-sky-200">
              {education.institution} · {education.duration}
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-300">
              {education.summary}
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className={`${displayFont.className} text-xs uppercase tracking-[0.32em] text-cyan-200`}>
                {education.thesis.label}
              </p>
              <p className="mt-3 text-xl font-semibold text-slate-100">
                {education.thesis.title}
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
                {education.thesis.summary}
              </p>
            </div>

            {education.linkedinPostEmbed ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p
                  className={`${displayFont.className} text-xs uppercase tracking-[0.32em] text-slate-400`}
                >
                  LinkedIn
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-slate-950/40">
                  <iframe
                    src={education.linkedinPostEmbed.src}
                    title={education.linkedinPostEmbed.title}
                    className="h-[520px] w-full border-0 sm:h-[400px]"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 text-sm text-slate-400">
                  <a
                    href={education.linkedinPostEmbed.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-200 underline underline-offset-4 transition hover:text-cyan-100"
                  >
                    Abrir publicacion en LinkedIn
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <SectionTitle title="Experiencia" />
        <section id="experiencia" className="scroll-mt-28 space-y-8">
          <p className="text-sm text-slate-400">
            Trayectoria actual y experiencia previa.
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
                  {/* website */}
                  {item.website && (
                    <Link
                      href={item.website}
                      target="_blank"
                      className="text-sm text-cyan-200 transition hover:text-cyan-100"
                    >
                      {item.website.replace(/^https?:\/\//, "")}
                    </Link>
                  )}
                </div>
                <p className="max-w-3xl text-base leading-8 text-slate-300">
                  {item.summary}
                </p>
                {item.achievements && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.achievements.map((achievement, index) => (
                      <p
                        key={index}
                        className="text-sm text-slate-300 list-item left-4 marker:text-cyan-400 margint-2"
                      >
                        {achievement}
                      </p>
                    ))}
                  </div>
                )}
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
        <section id="proyectos" className="scroll-mt-28 space-y-6">
          <p className="text-sm text-slate-400">
            Una selección de trabajos reales y conceptuales.
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
                <div className="relative flex h-full min-h-40 flex-col gap-4">
                  <div className="flex-1 rounded-[1rem] border border-white/10 bg-white/10 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                    {project.logo ? (
                      <div className="flex h-full min-h-24 items-center justify-center rounded-[0.85rem] bg-white/80 p-3">
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          width={200}
                          height={200}
                          className="h-auto w-full max-w-[150px] object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex h-full min-h-24 flex-col justify-between rounded-[0.85rem] bg-slate-950/30 p-3">
                        <span className={`${displayFont.className} text-[11px] uppercase tracking-[0.3em] text-slate-300`}>
                          Preview
                        </span>
                        <p className={`${displayFont.className} text-lg leading-6 text-white`}>
                          {project.label}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <span className={`${displayFont.className} text-[11px] uppercase tracking-[0.3em] text-slate-300`}>
                      Preview
                    </span>
                    <p className={`${displayFont.className} text-sm leading-5 text-white/90`}>
                      {project.label}
                    </p>
                  </div>
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
                  {project.github ? (
                    <ActionLink
                      href={project.github}
                      target="_blank"
                      variant="github"
                      icon={<GithubIcon className="h-4 w-4" />}
                    >
                      GitHub
                    </ActionLink>
                  ) : null}
                  <ActionLink
                    href={project.website}
                    target="_blank"
                    variant="web"
                    icon={<WebIcon className="h-4 w-4" />}
                  >
                    Web
                  </ActionLink>
                  {project.caseStudy ? (
                    <ActionLink
                      href={`/proyectos/${project.slug}`}
                      variant="caseStudy"
                      icon={<CaseStudyIcon className="h-4 w-4" />}
                    >
                      Caso de estudio
                    </ActionLink>
                  ) : null}
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

function ActionLink({
  children,
  href,
  icon,
  target,
  variant,
}: {
  children: ReactNode;
  href: string;
  icon: ReactNode;
  target?: "_blank";
  variant: "github" | "web" | "caseStudy";
}) {
  const variantStyles = {
    github:
      "border-cyan-400/20 bg-cyan-400/10 text-cyan-100 hover:border-cyan-300/40 hover:bg-cyan-400/15 hover:text-white focus-visible:ring-cyan-300/40",
    web:
      "border-amber-300/20 bg-amber-300/10 text-amber-100 hover:border-amber-200/40 hover:bg-amber-300/15 hover:text-white focus-visible:ring-amber-200/40",
    caseStudy:
      "border-slate-200/15 bg-white/5 text-slate-100 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:ring-slate-200/40",
  } as const;

  const content = (
    <>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-current">
        {icon}
      </span>
      <span>{children}</span>
      {target === "_blank" ? (
        <ExternalArrowIcon className="h-3.5 w-3.5 opacity-80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
    </>
  );

  const className = [
    "group inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.26em]",
    "transition duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
    variantStyles[variant],
  ].join(" ");

  if (target === "_blank") {
    return (
      <a href={href} target={target} rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/icons8-github-240.png"
      alt=""
      width={16}
      height={16}
      className={className}
      aria-hidden="true"
    />
  );
}

function WebIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

function CaseStudyIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 4.5h8.5L18 8v11.5H6z" />
      <path d="M14.5 4.5V8H18" />
      <path d="M8.5 11h6" />
      <path d="M8.5 14h6" />
      <path d="M8.5 17h4" />
    </svg>
  );
}

function ExternalArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M10 7h7v7" />
    </svg>
  );
}
