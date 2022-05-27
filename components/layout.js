import { Container } from "react-bootstrap";
import Link from 'next/link'

function Copyright() {
    return (
        <div>
            {'Copyright © '}
            <Link color="inherit" href="#">
                Blogger
            </Link>{' '}
            {new Date().getFullYear()}
            {''}
        </div>
    );
}

const Layout = ({ children }) => {
    return (
        <div>
            <Container>
                <p1>hola</p1>
                {children}
            </Container>
            <Copyright />
        </div>
    )
}

export default Layout;