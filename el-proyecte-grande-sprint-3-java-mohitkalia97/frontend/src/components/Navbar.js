import React from "react";
import '../assets/styles/navbar.css';
import Logout from "./Logout";

function Navbar() {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">
                        About
                    </a>
                </li>

                <li className="nav-item">
                    <a href="/markets" className="nav-link">
                        Markets
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/assets" className="nav-link">
                        Assets
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/register" className="nav-link">
                        Register
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/login" className="nav-link">
                        Login
                    </a>
                </li>
                <Logout/>
               

            </ul>
        </nav>
    )
}

export default Navbar;
