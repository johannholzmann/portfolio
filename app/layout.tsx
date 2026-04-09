import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "./navbar";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/react"

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johann Holzmann Portfolio",
  description: "Johann Holzmann Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen bg-[#060816] text-slate-100`}>
        <Providers>
          <div className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#060816]/80 backdrop-blur">
            <Navbar />
          </div>
          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 md:px-6">
            {children}
          </main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html >
  );
}
