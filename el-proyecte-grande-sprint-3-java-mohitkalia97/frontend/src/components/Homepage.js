import React from 'react';
import {Link} from "react-router-dom";
import '../assets/styles/homepage.css';


function Homepage() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to AssetAce</h1>
                
                <div id="login">

                </div>
                <p>
                    Track your investments with ease.
                </p>
                <div className="homepage-buttons">
                    <Link to="/login" className="homepage-button">Login</Link>
                    <Link to="/register" className="homepage-button">Register</Link>
                </div>
            </header>
        </div>

    )
}

export default Homepage;