"use client";

import { useState } from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/themetoggle/theme_toggle";

const navItems = {
    "": {
        name: "Inicio",
    },
    "cv": {
        name: "Currículum",
    },
    "tecnologias": {
        name: "Tecnologías",
    },
    "reactions": {
        name: "Reacciones",
    },
}

export default function Navbar({ }) {
    const [hiddenNav, setHiddenNav] = useState(true);
    return (
        <nav className="px-3 py-3 sm:px-8 sm:py-4 w-full">
            <div className="flex flex-wrap items-censter justify-between w-full">
                <Link href={"/"} className="flex items-center bg-yellow-400s">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-whites">
                        Portfolio
                    </span>
                </Link>
                <div className="items-center justify-between w-full md:flex md:w-auto order-2 md:order-1" id="mobile-menu-2" hidden={hiddenNav}>
                    <div className="flex flex-col md:items-center text-gray-700 dark:text-gray-400 mt-4 
                     rounded-lg md:rounded-full items-start
                    gap-y-0
                    md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium md:border-0">
                        {
                            Object.entries(navItems).map(([path, { name }]) => {
                                return <LinkItem item={name} reference={path} key={path} />
                            })
                        }
                    </div>
                </div>
                <div className="flex items-center order-1 md:order-2 gap-x-1">
                    <ThemeToggle />
                    <button onClick={() => setHiddenNav(!hiddenNav)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

const LinkItem = ({ reference, item }: { reference: string, item: string }) => {
    const pathname = usePathname();
    const linkRef = "/" + reference;
    const isActive = pathname == linkRef;
    return (
        <Link href={linkRef} className={`text-mdpl-3s rounded md:px-0s md:py-0s hover:dark:bg-neutral-600 hover:bg-neutral-300 p-2 items-center w-full text-start md:w-auto transition duration-200 ${isActive ? "text-black dark:text-white font-bold underline" : "text-gray-700 dark:text-gray-300 font-medium"}`}>
            {item}
        </Link>
    )
}
