import { Container } from "react-bootstrap";
import Link from 'next/link'
import Navbar from "../navbar/navbar";
import styles from "./layout.module.css";

function Copyright() {
    return (
        <div>
            {'Copyright © '}
            <Link color="inherit" href="#">
                Portfolio
            </Link>{' '}
            {new Date().getFullYear()}
            {''}
        </div>
    );
}

const Layout = ({ children }) => {
    return (
        <div className={styles.app}>
            <Navbar />
            <Container>
                <h1>hola</h1>
                {children}
            </Container>
            <Copyright />
        </div>
    )
}

export default Layout;