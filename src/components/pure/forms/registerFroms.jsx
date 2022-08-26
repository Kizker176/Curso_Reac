import React, { useState } from 'react';

const RegisterFroms = () => {
    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }
    ];

    const [data, setData] = useState(initialData);

    return (
        <div>

        </div>
    );
}

export default RegisterFroms;
