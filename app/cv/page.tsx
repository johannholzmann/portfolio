import { cvPdfHref } from "@/content/links";

export default function CV() {
  return (
    <div className="flex w-full flex-col space-y-6">
      <h1 className="text-center text-3xl font-semibold text-slate-100">
        Currículum Vitae
      </h1>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={cvPdfHref}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
        >
          Abrir PDF
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          download
          href={cvPdfHref}
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
        >
          Descargar PDF
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        <iframe src={cvPdfHref} width="100%" height="800px" />
      </div>
    </div>
  );
}

