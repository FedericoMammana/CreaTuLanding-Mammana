import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const { type } = useParams();
  useEffect(() => {
    //pido los datos
    getProducts() //retorna la promise
      .then((res) => {
        if (type) {
          //filtramos
          setData(res.filter((prod) => prod.category === type));
        } else {
          //si no existe la categoria devolvemos todo
          setData(res);
        }
      })
      .catch((error) => console.log(error)); //atrapar el error

    //NO NOS OLVIDEMOS DEL TYPE PORQUE ROMPO TODO
  }, [type]);

  return (
    <div>
      <h1>
        {props.mensaje}{" "}
        {type && (
          <span style={{ textTransform: "capitalize", color: "blue" }}>
            {type}
          </span>
        )}
      </h1>
      <ItemList data={data} />
    </div>
  );
};
export default ItemListContainer;
