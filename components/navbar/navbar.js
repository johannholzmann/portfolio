import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
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
    const [color, setColor] = useState();
    useEffect(() => 
    {
        setColor(theme == "dark" ? "white" : "black");
    }
    , [theme]);
    const [isToggle, setIsToggle] = useState(false);
    return (
        <Navbar variant="dark" expand="sm" className={styles.nav}>
            <Link href="/" passHref>
                <Navbar.Brand className={styles.brand}>Portfolio</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" onClick={() => setIsToggle(!isToggle)} >
                {
                    !isToggle &&
                    <MenuIcon color={color} />
                }
                {
                    isToggle &&
                    <CrossIcon color={color} />
                }
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
                <Nav className={`me-auto ${styles.menu}`} >
                    <NavLink reference="/" text="Inicio" />
                    <NavLink reference="/cv" text="Curriculum" />
                    <NavLink reference="/tecnologias" text="Tecnologias" />
                    <NavLink reference="/reactions" text="Reacciones" />
                    <NavLink reference="/pepas" text="Pepas" />
                </Nav>
                <ThemeToggle />
            </Navbar.Collapse>
        </Navbar>
    );
}



function MenuIcon({ color }) {
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


function CrossIcon({ color }) {
    return (
        <svg
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