import { useEffect, useState } from 'react';
import { Button, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import styles from "./index.module.css";

const KEY_PEPAS = "pepas";

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Nao pode poseer menos da 0 pepas
    </Tooltip>
);


const Overlay = ({ ButtonComponent }) => {
    return (
        <OverlayTrigger
            placement="top"
            delay={{ show: 0, hide: 0 }}
            overlay={renderTooltip}
        >
            <Button variant="warning">
                Menos
            </Button>
        </OverlayTrigger>
    )
        ;
}

const Example = ({ }) => {
    const [pepas, setPepas] = useState(0);
    const [initial, setInitial] = useState(true);
    useEffect(() => {
        if (localStorage) {
            const existPepas = localStorage.getItem(KEY_PEPAS);
            if (initial) {
                if (existPepas) {
                    const newPepas = parseInt(existPepas);
                    setPepas(newPepas ? newPepas : 0);
                }
                else
                    localStorage.setItem(KEY_PEPAS, pepas);
                setInitial(false);
            }
            else {
                if (existPepas)
                    localStorage.setItem(KEY_PEPAS, pepas);
            }
        }
    }, [pepas]);

    function callback(number) {
        setPepas((element) => element + number);
    }

    return (
        <Container className={styles.example_container}>
            <h2>
                Actualmente hay
                {
                    pepas == 1 ?
                        (` ${pepas} pepa`)
                        :
                        (` ${pepas} pepas`)
                }
            </h2>

            <h4>
                Segun los terminos y las condiciones dadas en el transcurso de la navegacion, ¿Desea mas pepas?
            </h4>

            <Container>
                <Row>
                    <Button onClick={() => callback(1)} variant="danger">
                        Mas
                    </Button>
                </Row>

                <br />

                <Row>
                    {
                        pepas == 0 &&
                        <Overlay />
                    }
                    {
                        pepas > 0 &&
                        <Button onClick={() => callback(-1)} className={`height: 100px`} variant="warning">
                            Menos
                        </Button>
                    }
                </Row>
            </Container>
        </Container>
    )
}

export default Example;