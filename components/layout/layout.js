import { Container } from "react-bootstrap";
import Link from 'next/link'
import Navbar from "../navbar/navbar";
import styles from "./layout.module.css";

import Image from 'next/image'

import Footer from '../footer/footer.js';

const Layout = ({ children }) => {
    return (
        <div className={styles.app}>
            <Navbar />
            <Container id="main-container" className={styles.main_container}>
                <h1>hola</h1>
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout;