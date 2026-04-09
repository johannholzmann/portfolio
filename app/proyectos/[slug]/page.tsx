import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/projects";
import ScrollSnapCarousel from "@/components/carousel/scroll_snap_carousel";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const { slug } = await Promise.resolve(params);
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  return (
    <article className="space-y-10">
      <div className="space-y-4">
        <Link
          href="/#proyectos"
          className="text-sm text-slate-400 transition hover:text-slate-200"
        >
          Volver a proyectos
        </Link>

        <header className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-slate-50 md:text-5xl">
            {caseStudy.title}
          </h1>
          {caseStudy.subtitle ? (
            <p className="max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {caseStudy.subtitle}
            </p>
          ) : null}
          <p className="max-w-3xl text-base leading-8 text-slate-300">
            {caseStudy.summary}
          </p>
        </header>
      </div>

      {caseStudy.links?.linkedin ? (
        <div>
          <Link
            href={caseStudy.links.linkedin}
            target="_blank"
            className="text-sm text-cyan-200 transition hover:text-cyan-100"
          >
            Ver publicación
          </Link>
        </div>
      ) : null}

      {caseStudy.images.length ? (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-100">Imágenes</h2>
          <ScrollSnapCarousel images={caseStudy.images} />
        </section>
      ) : null}

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-100">Caso</h2>
        <div className="space-y-6">
          {caseStudy.sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-xl font-semibold text-slate-100">
                {section.title}
              </h3>
              <div className="mt-3 space-y-3">
                {section.paragraphs.map((p) => (
                  <p key={p} className="text-base leading-8 text-slate-300">
                    {p}
                  </p>
                ))}
                {section.bullets?.length ? (
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-slate-300">
                    {section.bullets.map((b) => (
                      <li key={b} className="leading-7">
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-slate-100">Tecnologías</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {caseStudy.stack.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
                {group.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </section>
    </article>
  );
}

