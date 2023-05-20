import { NavLink } from "react-router-dom";
import Logo from "../images/logo.jpg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="" />
      <nav className="nav">
        <NavLink to="/"> Accueil </NavLink>
        <NavLink to="/about"> A Propos </NavLink>
      </nav>
    </div>
  );
}
