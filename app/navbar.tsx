"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/themetoggle/theme_toggle";
import { cvHref, githubUrl, linkedinUrl } from "@/content/links";

const navItems = {
  "#hero": {
    name: "Inicio",
  },
  "#educacion": {
    name: "Educacion",
  },
  "#experiencia": {
    name: "Experiencia",
  },
  "#proyectos": {
    name: "Proyectos",
  },
  cv: {
    name: "Curriculum",
  },
};

export default function Navbar() {
  const [hiddenNav, setHiddenNav] = useState(true);
  const [activeHash, setActiveHash] = useState("#hero");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const anchorRefs = Object.keys(navItems).filter((key) => key.startsWith("#"));

    const syncHashFromLocation = () =>
      setActiveHash(window.location.hash || "#hero");

    syncHashFromLocation();
    window.addEventListener("hashchange", syncHashFromLocation);

    if (typeof IntersectionObserver === "undefined") {
      return () => window.removeEventListener("hashchange", syncHashFromLocation);
    }

    const elements = anchorRefs
      .map((ref) => document.getElementById(ref.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));

    // Mark the section that is currently "near" the top of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        const id = visible?.target?.id;
        if (id) setActiveHash(`#${id}`);
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.01, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("hashchange", syncHashFromLocation);
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <nav className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-base font-semibold uppercase tracking-[0.28em] text-slate-100">
            Portfolio
          </span>
        </Link>

        <div
          className={`order-2 w-full items-center justify-between ${
            hiddenNav ? "hidden" : "block"
          } md:order-1 md:flex md:w-auto`}
          id="mobile-menu-2"
        >
          <div className="mt-4 flex flex-col items-start gap-y-0 rounded-2xl border border-white/10 bg-slate-950/70 p-2 text-slate-300 md:mt-0 md:flex-row md:items-center md:space-x-2 md:border-0 md:bg-transparent md:p-0 md:text-sm md:font-medium">
            {Object.entries(navItems).map(([path, { name }]) => (
              <LinkItem
                item={name}
                reference={path}
                key={path}
                activeHash={activeHash}
                onNavigate={() => setHiddenNav(true)}
                onSelectAnchor={(ref) => setActiveHash(ref)}
              />
            ))}
          </div>
        </div>

        <div className="order-1 flex items-center gap-x-1 md:order-2">
          <div className="flex items-center gap-2">
            <Link
              href={cvHref}
              className="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-xs font-medium text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30 md:px-3 md:text-sm"
            >
              CV
            </Link>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
            >
              <Image
                src="/icons8-linkedin-circled-240.png"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-white/10 bg-white/5 p-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
            >
              <Image
                src="/icons8-github-240.png"
                alt="GitHub"
                width={20}
                height={20}
              />
            </a>
          </div>
          <ThemeToggle />
          <button
            onClick={() => setHiddenNav(!hiddenNav)}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center rounded-lg border border-white/10 p-2 text-sm text-slate-300 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-400/30 md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded={!hiddenNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

const LinkItem = ({
  reference,
  item,
  activeHash,
  onNavigate,
  onSelectAnchor,
}: {
  reference: string;
  item: string;
  activeHash: string;
  onNavigate?: () => void;
  onSelectAnchor?: (ref: string) => void;
}) => {
  const pathname = usePathname();
  const isAnchor = reference.startsWith("#");

  const linkRef = isAnchor ? `/${reference}` : `/${reference}`;
  const isActive = isAnchor
    ? pathname === "/" && activeHash === reference
    : pathname === linkRef;

  return (
    <Link
      href={linkRef}
      onClick={() => {
        if (isAnchor) onSelectAnchor?.(reference);
        onNavigate?.();
      }}
      className={`w-full rounded-xl p-2 text-start text-sm transition duration-200 md:w-auto ${
        isActive
          ? "bg-white/10 text-white"
          : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
      }`}
    >
      {item}
    </Link>
  );
};
