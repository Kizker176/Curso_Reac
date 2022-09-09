import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('');

    function pressBotton() {
        const text = messageRef.current.value;
        alert(`Default in ${text}`);
    }

    function pressBottonParams(text) {
        alert(`Text: ${text}`);
    }

    function submitName(e) {
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div style={{ background: 'cyan', padding: '30px' }}>
            <p onMouseOver={() => console.log('On Mouse Over')}>
                Hello, {name}
            </p>
            <button onClick={() => console.log('Pressed Button 1')}>
                Button 1
            </button>
            <button onClick={pressBotton}>
                Button 2
            </button>
            <button onClick={() => pressBottonParams('Hello')}>
                Button 3
            </button>
            <input placeholder='Send a text to your father'
                onFocus={() => console.log('Input Focused')}
                onChange={(e) => console.log('Input changed:', e.target.value)}
                onCopy={() => console.log('copied text from Input')}
                ref={messageRef}>
            </input>
            <button onClick={() => send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{ marginTop: '20px' }}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New name'></input>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
