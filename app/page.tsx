import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getHomeContent } from "@/lib/home-content";
import { cvHref, emailHref, githubUrl, linkedinUrl } from "@/content/links";

const displayFont = { className: "font-mono" };

export default async function Home() {
  const { technologies, education, experience, projects } = await getHomeContent();

  return (
    <div className="relative w-full overflow-hidden">

      <section
        id="hero"
        className="scroll-mt-28 grid gap-10 border-b border-ivory/20 px-2 py-8 md:grid-cols-[minmax(0,1fr)_280px] md:px-0 md:py-10"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <p className={`${displayFont.className} text-sm uppercase tracking-[0.38em] text-sky-300`}>
              Software Engineer
            </p>
            <h1 className="font-heading max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-ivory sm:text-5xl md:text-7xl">
              Johann Holzmann
            </h1>
            <p className="max-w-3xl text-lg font-medium text-slate-300 md:text-xl">
              Ingeniero en Computación · Universidad Nacional del Sur
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Cuento con <strong className="font-semibold">más de 3 años de experiencia</strong> en desarrollo de software, con foco en <strong className="font-semibold">backend</strong> y en el diseño de aplicaciones empresariales, desarrollo y mantenimiento de APIs REST con .NET, Laravel y Node.js. También trabajé con bases de datos relacionales, Angular, React y Next.js, y el despliegue de aplicaciones en servidores.
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Fundamentalista de la simplicidad, la claridad, el código limpio y la escalabilidad. Apasionado por la tecnología, el diseño y la innovación, siempre buscando aprender y mejorar en cada proyecto.
            </p>
            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              Actualmente estoy en <strong className="font-semibold">búsqueda activa</strong> de oportunidades como Backend Developer, Fullstack Developer o Software Engineer.
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

        </div>

        <div className="relative mx-auto flex w-full max-w-[280px] items-center justify-center md:max-w-none">
          <div className="relative w-full pb-5">
            <div className="relative overflow-hidden rounded-md border border-mint/30">
              <Image
                src="/avatar_cut.jpg"
                alt="Johann Holzmann"
                width={560}
                height={560}
                priority
                className="relative h-auto w-full object-cover"
              />
            </div>
            <p className={`${displayFont.className} absolute bottom-0 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-availability bg-availability px-5 py-2.5 text-xs font-semibold tracking-[0.12em] text-ivory shadow-[0_8px_24px_rgba(2,6,23,0.45)]`}>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ivory" />
              #OPENTOWORK
            </p>
          </div>
        </div>
      </section>

      <div className="mt-10 space-y-10">
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
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-200 transition hover:text-cyan-100"
                    >
                      {item.website.replace(/^https?:\/\//, "")}
                    </Link>
                  )}
                  {item.links ? (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-sm">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-200 underline underline-offset-4 transition hover:text-cyan-100"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
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
            <div className="border-l border-mint/50 py-2 pl-5">
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

        <section
          id="tecnologias"
          aria-labelledby="tecnologias-title"
          className="scroll-mt-28 space-y-6"
        >
          <SectionTitle title="Skills y tecnologías" id="tecnologias-title" />
          <div className="grid gap-4 md:grid-cols-2">
            {technologies.map((group) => (
              <article
                key={group.title}
                className="min-w-0 border-t border-ivory/15 py-5"
              >
                <h3 className="text-lg font-semibold text-sky-200">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((technology) => (
                    <li
                      key={technology}
                      className={`${displayFont.className} whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200`}
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <SectionTitle title="Proyectos" />
        <section id="proyectos" className="scroll-mt-28 space-y-6">
          <p className="text-sm text-slate-400">
            Una selección de trabajos reales y conceptuales.
          </p>
          {projects.map((project) => (
            <article
              key={project.title}
              className="grid gap-5 border-t border-ivory/15 py-6 md:grid-cols-[220px_minmax(0,1fr)]"
            >
              <div
                className="relative overflow-hidden border border-ivory/10 bg-surface p-4"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.03] to-transparent" />
                <div className="relative flex h-full min-h-40 flex-col gap-4">
                  <div className="flex-1 border border-ivory/10 bg-ink p-3">
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

function SectionTitle({ title, id }: { title: string; id?: string }) {
  return (
    <div className="space-y-3 pt-2">
      <div className="h-px w-full bg-white/10" />
      <h2 id={id} className="text-3xl font-semibold text-slate-100">{title}</h2>
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
