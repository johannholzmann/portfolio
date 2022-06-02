import { Container } from "react-bootstrap";
import Reactions from "../../components/reactions/reactions";


export default function Home({ data2 }) {
    return (
        <Container style={{ textAlign: 'center' }}>
            <h1>Reacciones</h1>
            <br />
            <h4>
                Se muestran las reacciones de {' '}
                <a href="https://github.com/johannholzmann/portfolio/issues/1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                    este <b>issue</b>
                </a>
            </h4>
            <br />
            <Reactions />
        </Container>
    )
}