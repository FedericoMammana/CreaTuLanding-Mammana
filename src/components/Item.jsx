import React from "react";
import { Card, Button } from "react-bootstrap";

export const Item = ({ prod }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.img} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Text>${prod.price},00</Card.Text>
          <Button variant="primary">Ver Más</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Item;
