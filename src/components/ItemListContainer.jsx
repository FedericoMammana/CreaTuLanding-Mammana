import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // promesa que pide los datos
    getProducts()
      // tratamos la promesa y guardamos el estado
      .then((res) => setData(res));
  }, []);
  return (
    <div>
      <h1>{props.mensaje}</h1>
      <ItemList data={data} />
    </div>
  );
};
export default ItemListContainer;
