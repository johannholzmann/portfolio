import { Container } from "react-bootstrap";
import Link from 'next/link';
import styles from "./footer.module.css";

import Image from 'next/image'



function Footer() {
    return (
            <footer className={styles.footer}>
                <Link href="#hola">
                    <a>
                        {'Copyright © '}
                        Portfolio
                        {new Date().getFullYear()}
                        {''}
                        <span className={styles.logo}>
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span>
                        {' '}
                    </a>
                </Link>
            </footer>
        
    );
}

export default Footer;