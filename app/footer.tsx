import Image from "next/image";
import View from "@/components/views/views";
import { emailHref, githubUrl, linkedinUrl, oldPortfolioUrl } from "@/content/links";

const widthIcons = 44;

function Footer() {
  return (
    <footer className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 px-4 pb-6 pt-8 text-center text-sm text-slate-400 sm:px-6">
      <div className="flex justify-center gap-3">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-xl p-1 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
        >
          <Image
            alt="Linkedin icon"
            src="/icons8-linkedin-circled-240.png"
            width={widthIcons}
            height={widthIcons}
          />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="rounded-xl p-1 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
        >
          <Image
            alt="Github icon"
            src="/icons8-github-240.png"
            width={widthIcons}
            height={widthIcons}
          />
        </a>
        <a
          href={emailHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="rounded-xl p-1 transition hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
        >
          <Image
            alt="Mail icon"
            src="/icons8-envelope-96.png"
            width={widthIcons}
            height={widthIcons}
          />
        </a>
      </div>
      <div className="mt-3">
        <a
          href={oldPortfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-slate-400 underline underline-offset-4 transition hover:text-slate-200"
        >
          Ver versión OG del portfolio
        </a>
      </div>
      <View />
      <div className="mt-2">
        Copyright © Portfolio {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
