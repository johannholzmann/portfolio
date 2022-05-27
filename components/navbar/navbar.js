import {
    Navbar,
    Container,
    Nav,
} from 'react-bootstrap';

import ThemeToggle from '../themetoggle/ThemeToggle.js';
import styles from './navbar.module.css';

const NavbarComponent = ({ }) => {
    return (
        <Navbar variant="dark" expand="sm" className={styles.nav}>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className={`me-auto ${styles.pepa}`} >
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <ThemeToggle />
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;