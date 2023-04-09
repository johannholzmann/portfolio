import useSwr from "swr";
import Spinner from "../spinner";

async function fetcher(url) {
    const res = await fetch(url, {
        method: 'GET',
    });
    if (!res.ok)
        throw new Error("Error al obtener vistas")

    const views = await res.json();
    return views;
}

export default function View() {
    const id = "Home";
    const { data: views, error } = useSwr([`api/views/${id}`], fetcher, {
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
            <p>No pudimos obtener la cantidad de visitas</p>
        </div>
    );
}