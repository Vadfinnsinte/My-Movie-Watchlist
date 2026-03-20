import { NavLink } from "react-router-dom";
import "../style/header.css";
import { removeToken } from "../functions/helpers/tokens";

const Header = () => {
  const handleLogout = () => {
    removeToken();
  };
  return (
    <div className="header">
      <NavLink className="navlink" to="/my-movies">
        My Movies
      </NavLink>
      <NavLink className="navlink" to="/home">
        Home
      </NavLink>
      <NavLink className="navlink" to="/" onClick={handleLogout}>
        Sign Out
      </NavLink>
    </div>
  );
};

export default Header;
