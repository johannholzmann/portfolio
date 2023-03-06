import { useTheme } from "next-themes";
import { useState } from "react";
import useSWR from "swr";
import Spinner from "../spinner";
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


    return (
        <div className="flex justify-center">
            {
                initialLoading &&
                <Spinner />
            }
            {
                !initialLoading &&
                !data &&
                <h6>No se pudieron obtener las reacciones, intente mas tarde</h6>
            }
            {
                !initialLoading &&
                data &&
                <div className="grid grid-cols-2 max-w-md w-full gap-y-2 border rounded-3xl p-8 ">
                    {
                        data.map(function (element, index) {
                            return (
                                <div key={index} className="flex justify-center">
                                    <span>{emojis[element.reaction]}</span>
                                    <p >{element.count}</p>
                                </div>
                            );
                        })
                    }
                </div>
            }
        </div>
    )
}

/*
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
                                <Col xs={6}  key={element.reaction} style={{ display: 'flex', justifyContent:'center' }}>
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
}*/