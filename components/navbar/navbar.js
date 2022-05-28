import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';
import {
    Navbar,
    Container,
    Nav,
} from 'react-bootstrap';

import ThemeToggle from '../themetoggle/ThemeToggle.js';
import styles from './navbar.module.css';



const NavLink = ({ reference, text }) => {
    return (

        <div className={`nav-link ${styles.item}`}>
            <Link href={reference}>{text}</Link>
        </div>
    );
}
const NavbarComponent = ({ }) => {
    const { theme } = useTheme();
    const [isToggle, setIsToggle] = useState(false);
    return (
        <Navbar variant="dark" expand="sm" className={styles.nav}>
            <Link href="/" passHref>
                <Navbar.Brand className={styles.brand}>Portfolio</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setIsToggle(!isToggle)} >
                {
                    !isToggle &&
                    <MenuIcon theme={theme} />
                }
                {
                    isToggle &&
                    <CrossIcon theme={theme} />
                }
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
                <Nav className={`me-auto ${styles.pepa}`} >
                    <NavLink reference="/" text="Home" />
                    <NavLink reference="/about" text="About" />
                </Nav>
                <ThemeToggle />
            </Navbar.Collapse>
        </Navbar>
    );
}



function MenuIcon({ theme }) {
    const color = theme == "dark" ? "white" : "black";
    return (
        <svg
            className={styles.menu_icon}
            color={color}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                d="M2.5 7.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M2.5 12.5H17.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}


function CrossIcon({ theme }) {
    const color = theme == "dark" ? "white" : "black";
    return (
        <svg
            className="h-5 w-5 absolute text-gray-900 dark:text-gray-100"
            color={color}
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            shapeRendering="geometricPrecision"
        >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
        </svg>
    );
}


export default NavbarComponent;