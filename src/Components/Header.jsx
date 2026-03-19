import { NavLink } from "react-router-dom";
import "../style/header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink className="navlink" to="/my-movies">
        My Movies
      </NavLink>
      <NavLink className="navlink" to="/">
        Home
      </NavLink>
      <NavLink className="navlink" to="/">
        User
      </NavLink>
    </div>
  );
};

export default Header;
