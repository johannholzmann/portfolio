import { useEffect, useState } from 'react';

const KEY_PEPAS = "pepas";

const Example = ({ }) => {
    const [pepas, setPepas] = useState(0);
    const [initial, setInitial] = useState(true);
    useEffect(() => {
        if (localStorage) {
            const existPepas = localStorage.getItem(KEY_PEPAS);
            if (initial) {
                if (existPepas) {
                    const newPepas = parseInt(existPepas);
                    setPepas(newPepas ? newPepas : 0);
                }
                else
                    localStorage.setItem(KEY_PEPAS, pepas);
                setInitial(false);
            }
            else {
                if (existPepas)
                    localStorage.setItem(KEY_PEPAS, pepas);
            }
        }
    }, [pepas]);

    function callback(number) {
        setPepas((element) => element + number);
    }

    return (
        <div className="flex flex-col gap-y-2 opacity-80 hover:opacity-100 duration-500 hover:scale-[102%]">
            <div className="text-3xl">
                Actualmente hay
                {
                    pepas == 1 ?
                        (` ${pepas} pepa`)
                        :
                        (` ${pepas} pepas`)
                }
            </div>

            <div className="text-2xl">
                Según los términos y las condiciones dadas en el transcurso de la navegación, ¿Desea más pepas?
            </div>

            <div>
                <button onClick={() => callback(1)} className="btn-danger w-full">
                    Mas
                </button>

                <br />
                {
                    pepas >= 0 &&
                    <button 
                    onClick={() => callback(-1)} 
                    disabled={pepas <= 0} 
                    className={`btn-warning height: 100px w-full`}>
                        Menos
                    </button>
                }
            </div>
        </div>
    )
}

export default Example;