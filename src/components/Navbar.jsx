
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav id="navbar">
      <h1>Happy Hour Hero</h1>
      <div id="nav-links">
        <Link to="/">Home</Link>
        <Link to="/daily">Daily</Link>
        <Link to="/favourites">Favorites</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
}

export default Navbar;
