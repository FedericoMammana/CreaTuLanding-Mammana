import React from "react";
import "../styles/Item.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item = ({ prod }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.img} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>${prod.price},00</Card.Text>
          <Link className="btn btn-primary" to={"/item/" + prod.id}>
            Ver Más
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Item;
