import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Dar Tunis</h2>
      </div>
      
      <ul className="navbar-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/foods">Foods</Link></li>
        <li><Link to="/ajout-foods">Ajout Foods</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;