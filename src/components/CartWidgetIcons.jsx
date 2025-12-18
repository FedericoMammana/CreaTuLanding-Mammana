import { Badge } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidgetIcons = () => {
  const { cartQuantity, cart } = useContext(CartContext);
  return (
    <div style={{ alignItems: "center", display: "flex" }}>
      <Link to="/cartview">
        <TiShoppingCart fontSize={"1.8rem"} />
        {cart.length > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}{" "}
      </Link>
    </div>
  );
};
export default CartWidgetIcons;
