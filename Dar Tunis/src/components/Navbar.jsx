import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🇹🇳 Dar Tunis</h2>

      <div>
        <ul className="navlinks">
          <li><link to="/">Home</link></li>
       <li><Link to="/dishes">Menu</Link></li> 
       <li><Link to="/contact">contact</Link></li> 
       <li><Link to="/login">Login</Link></li> 
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
