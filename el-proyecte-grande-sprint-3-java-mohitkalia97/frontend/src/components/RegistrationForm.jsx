import { useState } from "react";
import React from 'react';

function RegistrationForm() {

const [username, setUsername] = useState(null);
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);

const handleInputChange = (e) => {
    const {id, value} = e.target;
    if (id === "username") {
        setUsername(value);
    }
    if (id === "email") {
        setEmail(value);
    }
    if (id === "password") {
        setPassword(value);
    }
}

const handleSubmit = () => {
    console.log(username, email, password);
    if (!username || !email || !password) {
        alert("Invalid input");
    } else {
        const newUser = {
            "username" : username,
            "email" : email,
            "password" : password
        }
        console.log(newUser)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        }
        registerUser(requestOptions);
    }
};

const registerUser = (requestOptions) => {
    fetch(
        'http://localhost:8090/authentication/register',
        requestOptions
    ).then((response) => {
        if (!response.ok) {
            throw new Error(response.status);
        } else {
            alert(`Successfully registered. Welcome, ${username}!`);
        }
    })
}
    return(
        <form>
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form_label" htmlFor="username">User Name </label>
                    <input className="form__input" type="text" onChange = {(e) => handleInputChange(e)} id="username" placeholder="UserName"/>
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input className="form__input" type="email" id="email" onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input className="form__input" type="password" id="password" onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                </div>
            <div className="footer">
                <button onClick={()=> handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
        </form>
    )
}
export default RegistrationForm;