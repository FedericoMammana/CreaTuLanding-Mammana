import { Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
// para utilizar el contexto se importan 2 cosas 1 el contexto que quiero utilizar y otro el hook para usar contextos
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidgetIcons = () => {
  const { cartQuantity, cart } = useContext(CartContext);
  return (
    <div style={{ alignItems: "center", display: "flex" }}>
      <Link to="/checkout">
        <TiShoppingCart fontSize={"1.8rem"} />
        {cart.length > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}{" "}
      </Link>
    </div>
  );
};
export default CartWidgetIcons;
