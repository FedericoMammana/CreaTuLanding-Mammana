import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// agrego el loader
import LoaderComponent from "./LoaderComponent";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    //seteo el loading en true
    setLoading(true);
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
      .catch((error) => console.log(error)) //atrapar el error
      .finally(() => setLoading(false));
    // agrego el finally con el setLoading

    //NO NOS OLVIDEMOS DEL TYPE PORQUE ROMPO TODO
  }, [type]);

  return (
    <>
      {loading ? (
        <LoaderComponent
          text={
            type ? `Cargando categoria ${type}...` : "Cargando Productos..."
          }
        />
      ) : (
        <div>
          <h1 className="text-success">
            {props.mensaje}{" "}
            {type && (
              <span style={{ textTransform: "capitalize", color: "red" }}>
                {type}
              </span>
            )}
          </h1>
          {/* <Input/> */}
          <ItemList data={data} />
        </div>
      )}
    </>
  );
};
// return (
//   <div>
//     <h1>
//       {props.mensaje}{" "}
//       {type && (
//         <span style={{ textTransform: "capitalize", color: "#352f44" }}>
//           {type}
//         </span>
//       )}
//     </h1>
//     <ItemList data={data} />
//   </div>
// );

export default ItemListContainer;
