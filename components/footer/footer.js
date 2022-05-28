import { Col, Container } from "react-bootstrap";
import Link from 'next/link';
import styles from "./footer.module.css";

import Logo from "../logo/logo";

function Footer() {
    return (
        <div className={styles.footer_container}>
            <footer className={styles.footer}>
                <Col sm={10} className={styles.col_data_footer}>
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