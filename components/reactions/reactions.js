import { useTheme } from "next-themes";
import { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import useSWR from "swr";
const emojis = {
    THUMBS_UP: "👍",
    THUMBS_DOWN: '👎',
    LAUGH: "😄",
    HOORAY: "🎉",
    CONFUSED: "😕",
    HEART: "🧡",
    ROCKET: "🚀",
    EYES: "👀",
}

export default function Reactions({ }) {
    const { theme } = useTheme();

    const [initialLoading, setInitialLoading] = useState(true);
    async function fetcher(url) {
        try {
            const res = await fetch(url, {
                method: 'GET',
            });
            if (res.status == 404)
                throw new Error("Not response");
            const views = await res.json();
            setInitialLoading(false);
            return views;
        }
        catch (error) {
            setInitialLoading(false);
            return null;
        }
    }

    const { data } = useSWR(["api/reactions"], fetcher, {
    });

    const color = theme === "dark" ? "white" : "black";

    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {
                initialLoading &&
                <Spinner animation="border" style={{ color: color }} />
            }
            {
                !initialLoading &&
                !data &&
                <h6>No se pudieron obtener las reacciones, intente mas tarde</h6>
            }
            {
                !initialLoading &&
                data &&
                <Row style={{backgroundColor:''}}>
                    {
                        data.map(function (element, index) {
                            return (
                                <Col xs={6} style={{ display: 'flex', justifyContent:'center' }}>
                                    <span>{emojis[element.reaction]}</span>
                                    <p >{element.count}</p>
                                </Col>
                            );
                        })
                    }
                </Row>
            }
        </Container>
    )
}