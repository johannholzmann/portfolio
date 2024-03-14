import Reactions from "@/components/reactions/reactions";

export default function Home({ }) {
    return (
        <div className="flex flex-col items-center">
            <div className="title">Reacciones</div>
            <br />
            <div className="max-w-xl w-full">
                <div className="text-2xl">
                    Se muestran las reacciones de {' '}
                    <a href="https://github.com/johannholzmann/portfolio/issues/1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                        este <b>issue</b>
                    </a>
                </div>
                <br />
                <Reactions />
            </div>
        </div>
    )
}