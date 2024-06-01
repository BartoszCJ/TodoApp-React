import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="title">
        Aplikacja Todo
      </Link>
      <ul>
        <li>
          <div>
            <NavLink className="rainbow-2" to="/todo">
              ToDo
            </NavLink>
          </div>
        </li>
        <li>
          <NavLink to="/autor">Autor</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
