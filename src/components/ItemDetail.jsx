import React from "react";
import "../styles/ItemDetail.css";
import { Card } from "react-bootstrap";

const ItemDetail = ({ detalle }) => {
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
            <Card.Text>Stock disponible: {detalle.stock} unidades</Card.Text>
          </Card.Body>
        </Card>
      </div>
      {/* OLD CARD
       <div className="detail-prod">
        <img src={detalle.img} alt={detalle.name} />
        <p>Precio: ${detalle.price},00</p>
        <p>{detalle.description}</p>
        <p>Stock disponible: {detalle.stock} unidades</p>
      </div> */}
    </div>
  );
};

export default ItemDetail;
