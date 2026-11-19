import { Link } from "react-router-dom"


function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🇹🇳 Dar Tunis</h2>
      <div className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/dishes">Menu</Link>
        <Link to="/contact">contact</Link>
      </div>
    </nav>
  );
}
export default Navbar;