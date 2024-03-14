"use client";

import { useEffect, useState } from 'react';

const KEY_PEPAS = "pepas";

const Pepas = ({ }) => {
    const [pepas, setPepas] = useState<number>(0);
    const [initial, setInitial] = useState<boolean>(true);

    useEffect(() => {
        if (localStorage) {
            const existPepas = localStorage.getItem(KEY_PEPAS);
            if (initial) {
                if (existPepas) {
                    const newPepas = parseInt(existPepas);
                    setPepas(newPepas ? newPepas : 0);
                }
                else
                    localStorage.setItem(KEY_PEPAS, pepas.toString());
                setInitial(false);
            }
            else {
                if (existPepas)
                    localStorage.setItem(KEY_PEPAS, pepas.toString());
            }
        }
    }, [pepas]);

    function callback(offset: number) {
        setPepas((element) => element + offset);
    }

    return (
        <div className="flex flex-col gap-y-8 items-center">
            <div className="text-2xl">
                Pepas actuales: {pepas}
            </div>

            <div className="text-2xl">
                Según los términos y las condiciones dadas en el transcurso de la navegación, ¿Desea más pepas?
            </div>

            <div className='max-w-xs w-full opacity-80 hover:opacity-100 duration-500 hover:scale-[102%]'>
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

export default Pepas;