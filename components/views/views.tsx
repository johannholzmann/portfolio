"use client";

import useSWR from "swr";
import Spinner from "../spinner";

async function fetcher(): Promise<{ views: number }> {
    const res = await fetch(`api/views/`, {
        method: 'GET',
    });
    if (!res.ok)
        throw new Error("Error al obtener vistas")
    const views = await res.json();
    return views;
}

export default function View() {
    const { data: views, error } = useSWR([`api/views/`], fetcher, {
        revalidateOnFocus: false,
    });
    if (!error) {
        return (
            <div className="flex justify-center">
                {
                    views ?
                        <span>{views.views} {views.views == 1 ? "visita" : "visitas"} al sitio</span>
                        :
                        <Spinner />
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