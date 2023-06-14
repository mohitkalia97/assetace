import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Assets from "./components/Assets";
import About from "./components/About";
import LoginForm from "./components/LoginForm.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";
import Markets from './components/Markets';
import React from 'react';

function App() {
    
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Homepage />}></Route>
                <Route path={"/login"} element={<LoginForm />}></Route>
                <Route path={"/register"} element={<RegistrationForm />}></Route>
                <Route path={"/assets"} element={<Assets />}></Route>
                <Route path={"/about"} element={<About />}></Route>
                <Route path={"/markets"} element={<Markets />}></Route>
            </Routes>
        </div>
    );
}
export default App;
