import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import EmptyCart from "./EmptyCart";

const CartView = () => {
  const { cart, removeItem, clear, total } = useContext(CartContext);
  const preConfirm = () => {
    Swal.fire({
      icon: "question",
      title: "¿Seguro quiere eliminar el carrito?",
      showDenyButton: true,
      denyButtonText: "No",
      confirmButtonText: "Si",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Se eliminó el carrito");
        clear();
        return <EmptyCart />;
      } else if (result.isDenied) {
        Swal.fire("Eliminacion Cancelada. Puede seguir comprando!");
      }
    });
  };
  if (!cart.length) {
    return <EmptyCart />;
  }
  return (
    <div>
      <h1>Tu carrito 🛒</h1>
      <div>
        {cart.map((compra) => (
          <div
            key={compra.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "2rem",
            }}
          >
            <img
              src={compra.img}
              alt={compra.name}
              style={{ width: "10rem" }}
            />
            <span>{compra.name}</span>
            <span>${compra.price},00</span>
            <span>Cantidad: {compra.quantity}</span>
            <span>Precio final: ${compra.quantity * compra.price},00</span>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(compra.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <span>Total a pagar:${total()},00 </span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          padding: "2rem",
        }}
      >
        <button className="btn btn-danger" onClick={preConfirm}>
          Vaciar carrito
        </button>
        <Link className="btn btn-success" to="/checkout">
          Terminar Compra
        </Link>
      </div>
    </div>
  );
};

export default CartView;
