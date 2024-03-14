import Spinner from "../spinner";

async function fetcher(): Promise<{ views: number } | null> {
    const res = await fetch(`${process.env.VERCEL_URL}/api/views/`, {
        method: 'GET',
    });
    if (!res.ok)
        return null;
    const views = await res.json();
    return views;
}

export default async function View() {
    const data = await fetcher();
    if (data) {
        return (
            <div className="flex justify-center">
                {
                    data ?
                        <span>{data.views} {data.views == 1 ? "visita" : "visitas"} al sitio</span>
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