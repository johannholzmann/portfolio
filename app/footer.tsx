import Image from "next/image";
import View from "@/components/views/views";

const widthIcons = 50;

function Footer() {
  return (
    <footer className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 px-4 pb-6 pt-8 text-center text-sm text-slate-400 sm:px-6">
      <div className="flex justify-center gap-2">
        <a
          href="https://www.linkedin.com/in/johann-holzmann/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Linkedin icon"
            src="/icons8-linkedin-circled-240.png"
            width={widthIcons}
            height={widthIcons}
          />
        </a>
        <a
          href="https://github.com/johannholzmann"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Github icon"
            src="/icons8-github-240.png"
            width={widthIcons}
            height={widthIcons}
          />
        </a>
        <a
          href="mailto:johannholzmann@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            alt="Mail icon"
            src="/icons8-envelope-96.png"
            width={widthIcons}
            height={widthIcons}
          />
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
