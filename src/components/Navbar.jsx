import "../styles/Navbar.css";
import CartWidget from "./CartWidget";
const Navbar = () => {
  return (
    <nav className="nav-container">
      <a className="anchor-nav" href="">
        <img src="../logo-steel-store.png" alt="logo" />
      </a>
      <a className="anchor-nav" href="">
        Nuevos Ingresos
      </a>
      <a className="anchor-nav" href="">
        Más vendidos
      </a>
      <a className="anchor-nav" href="">
        Ofertas
      </a>
      <CartWidget counter={9} />
    </nav>
  );
};
export default Navbar;
