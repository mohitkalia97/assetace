import { useState } from "react";

import React from 'react';

function LoginForm() {

const [username, setUsername] = useState(null);
const [password, setPassword] = useState(null);

const handleInputChange = (e) => {
    const {id, value} = e.target;
    if (id === "username") {
        setUsername(value);
    }
    if (id === "password") {
        setPassword(value);
    }
}

const handleSubmit = () => {
    console.log(username, password);
    if (!username || !password) {
        alert("Invalid input");
    } else {
        const existingUser = {
            "username" : username,
            "password" : password
        };
        console.log(existingUser)
        const encodedUserCredentials = window.btoa(existingUser.username + ':' + existingUser.password);
        const requestOptions = {
            method: 'POST',
            headers: {
                authorization : 'Basic ' + encodedUserCredentials
            }
        };
        loginUser(requestOptions);
    }
};

const loginUser = (requestOptions) => {
    fetch(
        'http://localhost:8080/authentication/login',
        requestOptions
    ) 
    .then(response => response.text())
    .then((token) => {
        console.log(token);
        localStorage.setItem("token", token);
        alert(`Successfully logged in. Welcome, ${username}!`);
        window.location.replace("/");
    })
    .catch((error) => {
        console.log(error)
    })

    //'Bearer ' + localStorage.getItem("token")

};


    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form_label" htmlFor="username">User Name </label>
                    <input className="form__input" type="text" onChange = {(e) => handleInputChange(e)} id="username" placeholder="UserName"/>
                </div>
                <div className="password">
                    <label className="form__label" htmlFor="password">Password </label>
                    <input className="form__input" type="password" id="password" onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
                </div>
                </div>
            <div className="footer">
                <button onClick={()=> handleSubmit()} type="submit" className="btn">Login</button>
            </div>
        </div>
    )
}

export default LoginForm;
