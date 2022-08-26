import React, { useState } from 'react';

//definientdo estilios en constantes

//? Estilo para usuario logueado
const loggedStyle = {
    color: 'white'
}

//? Estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    //Genereamos un estado para el componete
    //y asi controlar si el usuario esta o no logueado
    const [logged, setLogeed] = useState(false);

    const greetingUser = () => (<p>HOLA, {props.name}</p>);
    const pleaseLogin = () => (<p>Please login</p>);

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
            {logged ? greetingUser() : pleaseLogin()}
            <button onClick={() => {
                console.log('Boton pulsado');
                setLogeed(!logged);
            }}>
                {logged ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}

export default GreetingStyled;
