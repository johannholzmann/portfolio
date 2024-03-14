import Image from "next/image"

export default function CV({ }) {
    return (
        <div className="flex flex-col space-y-2">
            <div className="text-center title">
                Curriculum Vitae
            </div>
            <br />
            <div className="grid grid-cols-1 space-y-2 sm:space-y-0 sm:grid-cols-2 place-items-center ">
                <div>
                    <a target={"_blank"} href="/cv/CV - Holzmann Johann.pdf">
                        <button className="btn-warning">
                            {"Abrir CV "}
                            <svg style={{ stroke: "currentcolor", fill: "currentcolor", strokeWidth: "0", height: '15px', width: '15px' }} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill="" data-darkreader-inline-stroke=""><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></path><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"></path></svg>
                        </button>
                    </a>
                </div>
                <div>
                    <a target={"_blank"} download href="/cv/CV - Holzmann Johann.pdf">
                        <button className="btn-danger">
                            {"Descargar CV "}
                            <svg style={{ stroke: "currentcolor", fill: "currentcolor", strokeWidth: "0", height: '15px', width: '15px' }} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" data-darkreader-inline-fill="" data-darkreader-inline-stroke=""><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"></path><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"></path></svg>
                        </button>
                    </a>
                </div>
            </div>
            <br />
            <Image src={"/cv/CV.png"} alt="Curriculum Vitae" width={1414} height={2000} quality={100} />
        </div>
    )
}