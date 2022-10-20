import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

//? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

//? Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}

//loggin / logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}

//? (Exprecion true) && exppresion => se rendereriza la expresion
//? (Exprecion true) && exppresion => no se rendereriza la expresion


const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessage, setNMessge] = useState(0);

    /* const updateAccess = () => {
        setAccess(!access);
    } */

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

    /* if (access) {
        optionalButton = <button onClick={updateAccess}>Logout</button>
    } else {
        optionalButton = <button onClick={updateAccess}>Login</button>
    } */

    if (access) {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}>Logout</LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}>Login</LoginButton>
    }

    //Unread messages
    let addMessages = () => {
        setNMessge(nMessage + 1)
    }

    return (
        <div>
            {/* optional button */}
            {optionalButton}
            {/* N Messages under */}
            {/* {nMessage > 0 && nMessage === 1 && <p>Yuo have {nMessage} new messages... </p>}
            {nMessage > 1 && <p>Yuo have {nMessage} new messages... </p>}
            {nMessage === 0 && <p>There are no new messages... </p>} */}
            {/* ternay operator */}
            {access ? (
                <div>{nMessage > 0 ?
                    <p>Yuo have {nMessage} new message{nMessage > 1 ? 's' : null}... </p> :
                    <p>There are no new messages... </p>}
                    <button onClick={addMessages}>{nMessage === 0 ?
                        'add your frist message' :
                        'Add new Messages'}
                    </button>
                </div>) : null}

        </div>
    );
}

export default OptionalRender;
