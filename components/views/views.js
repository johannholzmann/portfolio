import { useEffect, useState } from "react";
import { addView, getViews } from "../../data/api";
import useSwr from "swr";

import { Spinner } from "react-bootstrap";

import { useTheme } from "next-themes";


export default function View() {
    const {theme} = useTheme();
    const [error, setError] = useState(false);
    const [color, setColor] = useState();

    async function fetcher() {
        await addView();
        const views = await get_views();
        return views;
    }

    const { data } = useSwr(['api'], fetcher,{
        revalidateOnFocus: false,
    });

    useEffect(() => 
    {
        setColor(theme == "dark" ? "white" : "black");
    }
    , [theme]);

    async function get_views() {
        const data = await getViews(1234);
        if (data.status) {
            return data.views;
        }
        else {
            setError(true);
        }
    }
    async function add_view() {
        await addView(123);
    }

    if (!error) {
        return (
            <div>
                {
                    data ?
                        (
                            <h6>{data} visitas</h6>
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