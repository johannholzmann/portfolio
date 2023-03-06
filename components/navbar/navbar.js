import { useState } from "react"
import Link from "next/link";
import ThemeToggle from '../themetoggle/ThemeToggle.js';
import { useRouter } from "next/router";

function Nav({ }) {
    const [hiddenNav, setHiddenNav] = useState(true);
    return (
        <div className="">
            <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link href={"/"} className="flex items-center">
                        <span className="self-center text-xl whitespace-nowrap">
                            Portfolio
                        </span>
                    </Link>
                    <div className="flex items-center order-1 md:order-2">
                        <button onClick={() => setHiddenNav(!hiddenNav)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hiddsen w-full md:flex md:w-auto order-1 md:order-1" hidden={hiddenNav} id="mobile-menu-2">
                        <ul className="flex flex-col items-start w-full p-4 mt-4 border items-centers border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
                            <NavLink reference="/" text="Inicio" />
                            <NavLink reference="/cv" text="Curriculum" />
                            <NavLink reference="/tecnologias" text="Tecnologias" />
                            <NavLink reference="/reactions" text="Reacciones" />
                            <NavLink reference="/pepas" text="Pepas" />
                            <li className="flex flex-col w-full items-center">
                                <ThemeToggle />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


const NavLink = ({ reference, text }) => {
    const router = useRouter();
    const asPath = router.asPath;
    const active = reference == asPath;
    return (
        <li className="w-full">
            <Link href={reference} className={` ${active ? "dark:text-orange-300 text-yellow-500" : "dark:text-gray-200"} block py-2 pl-3 pr-4 rounded hover:bg-gray-300 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
            dark:border-gray-700`}>
                {text}
            </Link>
        </li>
    );
}


export default Nav;