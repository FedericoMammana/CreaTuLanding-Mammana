import "../styles/Navbar.css";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <NavLink className="anchor-nav" to="/">
        <img src="../logo-steel-store.png" alt="logo" />
      </NavLink>
      <NavLink className="anchor-nav" to="/category/nuevos">
        Nuevos
      </NavLink>
      <NavLink className="anchor-nav" to="/category/mas vendidos">
        Mas vendidos
      </NavLink>
      <NavLink className="anchor-nav" to="/category/ofertas">
        Ofertas
      </NavLink>
      <NavLink className="anchor-nav" to="/category/accesorios">
        Accesorios
      </NavLink>
      <CartWidget counter={9} />
    </nav>
  );
};

export default Navbar;
