/**
 *ejemplo de uso del hook useState
 
 Crear un componente de tipo funcion y crear su estado
 privado a traves de un hook y, ademas, poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {
    //Valor inicial para un contador
    const valorInicial = 0

    // valor inical para una persona
    const personaInicial = {
        nombre: 'Martin',
        email: 'martin@imaginagroup.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERONOSAINICIAL sean
     * parte del estado del componente para asi poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente
     * 
     * const [nombreVariable, funcioparacambiar] = useState(valorinical)
    */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Funcion para actualizar el estado privado que contiene el contador
    */
    function incrementarContador() {
        // ? funcioParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /**
     * funcion para actualizar el estado de persona en el componente
    */
    function actualizarPersona() {
        setPersona(
            {
                nombre: 'pepe',
                email: 'pep@imginagrup.com'
            }
        )
    }


    return (
        <div>
            <h1>** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h3>NOMBRE: {persona.nombre}</h3>
            <h4>EMAIL: {persona.email}</h4>
            {/* bloque de botones para actualizar el estado */}
            <div>
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>Actualizar Persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
