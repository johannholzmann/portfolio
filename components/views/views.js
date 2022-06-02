import { useEffect, useState } from "react";
import useSwr from "swr";

import { Spinner } from "react-bootstrap";

import { useTheme } from "next-themes";


export default function View() {
    const {theme} = useTheme();
    const [error, setError] = useState(false);
    const [color, setColor] = useState();

    async function fetcher(url) {
        const views = await fetch(url, {
            method: 'GET',
        });
        return await views.json();
    }

    const id = "Home";
    const { data } = useSwr([`api/views/${id}`], fetcher,{
        revalidateOnFocus: false,
    });

    useEffect(() => 
    {
        setColor(theme == "dark" ? "white" : "black");
    }
    , [theme]);

    if (!error) {
        return (
            <div>
                {
                    data ?
                        (
                            <a>{data} visitas</a>
                        )
                        :
                        (
                            <Spinner animation="border"  style={{color: color}} />
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