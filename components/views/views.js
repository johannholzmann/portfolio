import { useState } from "react";
import useSwr from "swr";
import Spinner from "../spinner";

export default function View() {
    const [error, setError] = useState(false);

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
    const { data: views } = useSwr([`api/views/${id}`], fetcher, {
        revalidateOnFocus: false,
    });

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
                            <Spinner />
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