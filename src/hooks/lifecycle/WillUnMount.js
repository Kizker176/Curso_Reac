/**
 * Ejemplo de uso del metodo componetewillUnmount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (cuando el componente va a desaparecer)
*/

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {
    componentWillUnmount() {
        console.log('Comportamiento antes de que el componete desapararezca')
    }
    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        )
    }
}


export const WillUnMountHook = () => {
    useEffect(() => {
        //aqui no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componete desapararezca')
        };
    }, []);
    return (
        <div>

        </div>
    );
};
