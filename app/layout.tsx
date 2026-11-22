import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Spectral } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "./navbar";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/react"

const font = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const headingFont = Spectral({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-spectral" });
const monoFont = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-mono" });

export const metadata: Metadata = {
  title: "Johann Holzmann Portfolio",
  metadataBase: new URL("https://johann.vercel.app"),
  description: "Johann Holzmann, Ingeniero en Computación. Portfolio de proyectos, experiencia y desarrollo de productos digitales.",
  openGraph: {
    title: "Johann Holzmann | Ingeniero en Computación",
    description: "Portfolio de proyectos, experiencia y desarrollo de productos digitales.",
    url: "https://johann.vercel.app",
    siteName: "Johann Holzmann",
    images: [{ url: "/images/og-portfolio.png", width: 1200, height: 630, alt: "Johann Holzmann, Ingeniero en Computación" }],
    locale: "es_AR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Johann Holzmann | Ingeniero en Computación", description: "Portfolio de proyectos, experiencia y desarrollo de productos digitales.", images: ["/images/og-portfolio.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="es">
      <body className={`${font.variable} ${headingFont.variable} ${monoFont.variable} min-h-screen bg-ink font-sans text-ivory`}>
        <Providers>
          <div className="sticky top-0 z-40 w-full border-b border-ivory/10 bg-ink/95 backdrop-blur">
            <Navbar />
          </div>
          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 font-sans md:px-6">
            {children}
          </main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html >
  );
}
