import React, { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [FullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const clearForm = () => {
        setEmail('');
        setPassword('');
        setFullName('');
        setPhoneNumber('');
    };

    return (
        <div>
            <h1>Login Form</h1>
            <input
               type="text"
               placeholder="Enter Your Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <input
               type="password"
               placeholder="Enter Your Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />
            <input
               type="text"
               placeholder="Enter Your Full Name"
               value={FullName}
               onChange={(e) => setFullName(e.target.value)}
            />
            <input 
               type="text"
               placeholder="Enter Your Phone Number"
               value={phoneNumber}
               onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p> Your Email: {email}, </p>
            <p> Your Password: {password}, </p>
            <p> Your Full Name: {FullName}, </p>
            <p> Your Phone Number: {phoneNumber}, </p>
            <button onClick={clearForm}>Clear Form</button>
        </div>
    )
}
export default LoginForm;