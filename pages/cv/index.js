import Image from "next/image"
import Link from "next/link"
import { Container, Button, Row, Col } from "react-bootstrap"
import styles from "./styles.module.css"

export default function CV({ }) {
    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>
                Curriculum Vitae
            </h1>
            <br />
            <Row className={styles.buttons} style={{ textAlign: 'center' }}>
                <Col sm={6}>
                    <a target={"_blank"} href="/cv/CV - Holzmann Johann.pdf">
                        <Button variant="warning" size="lg">
                            {"Abrir CV "}
                            <svg style={{ stroke: "currentcolor", fill: "currentcolor", strokeWidth: "0", height: '15px', width: '15px' }} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill="" data-darkreader-inline-stroke=""><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></path><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"></path></svg>
                        </Button>
                    </a>
                </Col>
                <Col sm={6} >
                    <a target={"_blank"} download href="/cv/CV - Holzmann Johann.pdf">
                        <Button variant="danger" size="lg">
                            {"Descargar CV "}
                            <svg style={{ stroke: "currentcolor", fill: "currentcolor", strokeWidth: "0", height: '15px', width: '15px' }} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill="" data-darkreader-inline-stroke=""><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></path><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"></path></svg>
                        </Button>
                    </a>
                </Col>
            </Row>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Image src={"/cv/CV.png"} width={1414} height={2000} />
            </div>
        </Container>
    )
}