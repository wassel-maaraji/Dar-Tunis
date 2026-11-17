import React from "react";
import {link} from "react-router-dom"
import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h2>Dar Tunis</h2>
            </div>
            <ul className="navbar.link">
                <li><link to="/">Acceuil</link></li>
                <li><link to="/foods">Foods</link></li>
                <li><link to="/Ajout foods">Foods</link></li>
                <li><link to="/contact">Contact</link></li>
            </ul>
        </nav>

    )
}