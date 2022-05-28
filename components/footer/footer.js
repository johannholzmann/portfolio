import { Col, Container, Row } from "react-bootstrap";
import Link from 'next/link';
import styles from "./footer.module.css";

import Logo from "../logo/logo";

function Footer() {
    return (
        <div className={styles.footer_container}>
            <footer className={styles.footer}>
                <Col>
                    <a href="https://www.linkedin.com/in/johann-holzmann/" target="_blank">
                        Linkedin
                    </a>
                    <a href="https://github.com/johannholzmann" target="_blank">
                        Github
                    </a>
                </Col>
                <Col sm={12} className={styles.col_data_footer}>
                    <Link href="#hola">
                        <a>
                            {'Copyright © Portfolio '}
                            {new Date().getFullYear()}
                            {' '}
                            <div className={styles.logo_container}>
                                <Logo />
                            </div>
                            {' '}
                        </a>
                    </Link>
                </Col>
            </footer>
        </div>
    );
}

export default Footer;