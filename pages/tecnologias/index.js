import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import Reactions from "../../components/reactions/reactions";


export default function Home({ data2 }) {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Tecnologías</h1>
            <br />
            <ul style={{ textAlign: 'start' }}>
                <li>
                    Node JS
                    <ul>
                        <li>Express</li>
                        <li>Next JS</li>
                    </ul>
                </li>
                <li>React</li>
                <li>Laravel</li>
                <li>
                    Otros
                    <ul>
                        <li>PHP</li>
                        <li>Python</li>
                        <li>C</li>
                        <li>C#</li>
                        <li>C++</li>
                    </ul>
                </li>
                <li>
                    Bases de datos
                    <ul>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}