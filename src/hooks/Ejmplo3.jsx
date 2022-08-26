/**
 * Ejemplo Hooks:
 * -useState()
 * useContext()
*/

import React, { useState, useContext } from 'react';

/**
 * @retunrs Componente 1
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
*/
const miContexto = React.createContext(null);

const Componente1 = () => {

    //Inicializamos un estado vacio que va a realizarse con los
    //datos del contexto del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                EL TOKEN ES: {state.token}
            </h1>
            {/* Pintamos el componete 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);
    return (
        <div>
            <h2>
                La sesion es: {state.sesion}
            </h2>
        </div>
    );
}

export default function MiComponenteConContexto() {
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }
    //creamos el estado de este componete
    const [sesionData, setSesionData] = useState(estadoInicial);

    function actualizarSecion() {
        setSesionData(
            {
                token: 'JWT1234567890',
                sesion: sesionData.sesion + 1
            }
        )
    }
    return (
        <div>
            <miContexto.Provider value={sesionData}>
                {/* Todo lo que este dentro puede leer los datos de ssesionData */}
                {/* Ademos, si se actializa, los componentes de aqui, tambien lo atualizan */}
                <h1>** Ejemoplo de useState() y useContext() **</h1>
                <Componente1></Componente1>
                <button onClick={actualizarSecion}>actualizar Secion</button>
            </miContexto.Provider>
        </div>
    )
}

