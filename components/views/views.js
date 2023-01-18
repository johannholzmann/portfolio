import { useEffect, useState } from "react";
import useSwr from "swr";

import { Spinner } from "react-bootstrap";

import { useTheme } from "next-themes";

export default function View() {
    const { theme } = useTheme();
    const [error, setError] = useState(false);
    const [color, setColor] = useState();

    async function fetcher(url) {
        try {
            const res = await fetch(url, {
                method: 'GET',
            });
            const views = await res.json();
            return views;
        }
        catch (error) {
            setError(true);
        }
    }

    const id = "Home";
    const { data: views} = useSwr([`api/views/${id}`], fetcher, {
        revalidateOnFocus: false,
    });

    useEffect(() => {
        setColor(theme == "dark" ? "white" : "black");
    }
        , [theme]);

    if (!error) {
        return (
            <div>
                {
                    views ?
                        (
                            <a>{views} {views == 1 ? "visita" : "visitas"} al sitio</a>
                        )
                        :
                        (
                            <Spinner animation="border" style={{ color: color }} />
                        )
                }
            </div>
        )
    }

    return (
        <div>
            <p1>No pudimos obtener la cantidad de visitas</p1>
        </div>
    );
}