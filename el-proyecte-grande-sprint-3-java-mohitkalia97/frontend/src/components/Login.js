import React from 'react';
import '../assets/styles/login.css'


function Login(){
    return(
        <div className="App">
            <header className="App-header">
                <h2>Login to AssetAce</h2>

                <form>
                    <label>
                        Email:
                        <input type="email" name="email" />
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                    <br/>
                    <button type="submit">Login</button>
                </form>
                <a href="/register"> Don't have an account? Register here</a>
            </header>

        </div>

    )
}

export default Login;