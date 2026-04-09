"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
  caption?: string;
};

export default function ScrollSnapCarousel({
  images,
}: {
  images: CarouselImage[];
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const ids = useMemo(
    () => images.map((_, i) => `carousel-slide-${i}`),
    [images]
  );

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;

    const clamped = Math.max(0, Math.min(images.length - 1, index));
    const target = el.querySelector<HTMLElement>(`#${ids[clamped]}`);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActiveIndex(clamped);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-slate-400">
          {images.length} {images.length === 1 ? "imagen" : "imágenes"}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex <= 0}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex >= images.length - 1}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth rounded-2xl border border-white/10 bg-white/[0.03] p-3"
        role="region"
        aria-label="Carrusel de imágenes"
      >
        {images.map((img, idx) => (
          <figure
            key={img.src}
            id={ids[idx]}
            className="snap-center shrink-0 basis-[92%] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:basis-[70%] md:basis-[56%]"
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            {img.caption ? (
              <figcaption className="px-4 py-3 text-sm text-slate-400">
                {img.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={ids[idx] + "-dot"}
            type="button"
            onClick={() => scrollToIndex(idx)}
            aria-label={`Ir a imagen ${idx + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              idx === activeIndex ? "bg-cyan-300" : "bg-white/15 hover:bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

