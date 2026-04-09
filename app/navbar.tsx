"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/themetoggle/theme_toggle";

const navItems = {
  "": {
    name: "Inicio",
  },
  cv: {
    name: "Curriculum",
  },
  tecnologias: {
    name: "Tecnologias",
  },
  reactions: {
    name: "Reacciones",
  },
};

export default function Navbar() {
  const [hiddenNav, setHiddenNav] = useState(true);

  return (
    <nav className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <span className="self-center text-base font-semibold uppercase tracking-[0.28em] text-slate-100">
            Portfolio
          </span>
        </Link>

        <div
          className="order-2 w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="mobile-menu-2"
          hidden={hiddenNav}
        >
          <div className="mt-4 flex flex-col items-start gap-y-0 rounded-2xl border border-white/10 bg-slate-950/70 p-2 text-slate-300 md:mt-0 md:flex-row md:items-center md:space-x-2 md:border-0 md:bg-transparent md:p-0 md:text-sm md:font-medium">
            {Object.entries(navItems).map(([path, { name }]) => (
              <LinkItem item={name} reference={path} key={path} />
            ))}
          </div>
        </div>

        <div className="order-1 flex items-center gap-x-1 md:order-2">
          <ThemeToggle />
          <button
            onClick={() => setHiddenNav(!hiddenNav)}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center rounded-lg border border-white/10 p-2 text-sm text-slate-300 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-400/30 md:hidden"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
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
}: {
  reference: string;
  item: string;
}) => {
  const pathname = usePathname();
  const linkRef = "/" + reference;
  const isActive = pathname == linkRef;

  return (
    <Link
      href={linkRef}
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
