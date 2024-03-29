import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Navbar from "./navbar";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/react"

const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Johann Portfolio",
  description: "Johann Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} text-center dark:from-black dark:to-[#0c0c0c] bg-gradient-to-b from-white to-orange-100 min-h-screen mx-auto flex flex-col items-center text-black dark:text-white`}>
        <Providers>
          <div className="w-full dark:bg-[#070707] bg-[#f7f7f7] sticky top-0 z-40 border-b dark:border-[#1d1d1f] border-[#c7c3c3]">
            <Navbar />
          </div>
          <main className='flex-1 my-4 flex flex-col gap-y-4 items-center max-w-4xl w-full'>
            {children}
          </main>
          <Footer />
          <Analytics />
        </Providers>
      </body>
    </html >
  );
}
