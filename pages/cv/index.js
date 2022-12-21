import Image from "next/image"
import { Container } from "react-bootstrap"

export default function CV({ }) {
    return (
        <Container>
            <h1 style={{ textAlign: "center" }}>
                Curriculum Vitae
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Image src={"/CV.png"} width={1414} height={2000} />
            </div>
        </Container>
    )
}