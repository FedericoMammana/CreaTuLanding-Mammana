import React from "react";
import "../styles/ItemDetail.css";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const ItemDetail = ({ detalle }) => {
  const [purchase, setPurchase] = useState(false);
  const { addItem, itemQuantity } = useContext(CartContext);
  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    setPurchase(true);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Agregaste ${detalle.name} al carrito`,
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const stockActualizado = detalle.stock - itemQuantity(detalle.id);
  return (
    <div>
      <h2>Detalle del producto: {detalle.name}</h2>
      <div className="detail-prod">
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={detalle.img} />
          <Card.Body>
            <Card.Title>{detalle.name}</Card.Title>
            <Card.Text>Precio: ${detalle.price},00</Card.Text>
            <Card.Text>{detalle.description}</Card.Text>
            <Card.Text>Stock disponible: {stockActualizado} unidades</Card.Text>
          </Card.Body>
        </Card>
        {purchase ? (
          <Link className="btn btn-dark" to="/cart">
            Ir al carrito
          </Link>
        ) : (
          <ItemCount stock={stockActualizado} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
