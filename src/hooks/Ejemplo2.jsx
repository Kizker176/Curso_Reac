/**
 * Emplo de uso de:
 * -useState()
 * -useRef()
 * -useEffect()
*/

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {
    //Vamos a crear dos contarodes distintos
    //cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //vamos acrear una referencia con useRef() para asociar una valirable
    //con un elemto del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1 + 1)
    }

    function incrementar2() {
        setContador2(contador2 + 1)
    }

    /**
     * Trabajador con UseEffect
    */

    /**
     * ? caso 1: Ejecutar SIEMPRE un snippet de codigo
     * Cada vez que haya un cambio en el estado del componete
     * se ejecuta quello que este dentro del useEffect()
    */

    /* useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando Referencio a Elemento del DOM:');
        console.log(miRef);
    }) */

    /**
     * ? Caso2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * En caso de que cambie contador2, no habra ejecucion
    */

    /* useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1');
        console.log('Mostrando Referencio a Elemento del DOM:');
        console.log(miRef);
    }, [contador1]); */
    
    /**
     * ? Caso2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
     * Cada vez que haya un cambio en contador 1, se ejecuta lo que diga el useEffect()
     * Cada vez que haya un cambio en contador 2, se ejecuta lo que diga el useEffect()
    */

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR 1 o CONTADOR 2');
        console.log('Mostrando Referencio a Elemento del DOM:');
        console.log(miRef);
    }, [contador1, contador2]);

    return (
        <div>
            <h1>** Ejemplo de useState(), useRef(), useEffect() ***</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>
            {/* Elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={incrementar1}> incrementar contador 1</button>
                <button onClick={incrementar2}> incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
