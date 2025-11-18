import { useState } from "react";
const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  console.log("soy ItemCount");
  return (
    <div>
      <button className="btn btn-danger" onClick={restar}>
        -
      </button>
      <span className="btn">{count}</span>
      <button className="btn btn-success" onClick={sumar}>
        +
      </button>
    </div>
  );
};
export default ItemCount;
