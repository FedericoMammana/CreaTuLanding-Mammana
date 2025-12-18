import { useEffect, useState } from "react";
import { getProducts, products } from "../mock/AsyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
// agrego el loader
import LoaderComponent from "./LoaderComponent";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  //Firebase

  useEffect(() => {
    setLoading(true);
    //1.conectar a nuestra coleccion
    const prodCollection = type
      ? query(collection(db, "items"), where("category", "==", type))
      : collection(db, "items");
    //2.pedir documentos
    getDocs(prodCollection)
      .then((res) => {
        //tratamos la promesa
        console.log(res);
        console.log(res.docs);
        //limpiar y obtener datos
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        // console.log(list)
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [type]);

  // useEffect(() => {
  //   //seteo el loading en true
  //   setLoading(true);
  //   //pido los datos
  //   getProducts() //retorna la promise
  //     .then((res) => {
  //       if (type) {
  //         //filtramos
  //         setData(res.filter((prod) => prod.category === type));
  //       } else {
  //         //si no existe la categoria devolvemos todo
  //         setData(res);
  //       }
  //     })
  //     .catch((error) => console.log(error)) //atrapar el error
  //     .finally(() => setLoading(false));
  //   // agrego el finally con el setLoading

  //   //NO NOS OLVIDEMOS DEL TYPE PORQUE ROMPO TODO
  // }, [type]);

  //SE BORRA!!!!!
  // const subirData = () => {
  //   console.log("Subiendo data...");
  //   const collSubir = collection(db, "items");
  //   products.map((prod) => addDoc(collSubir, prod));
  // };

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
              <span style={{ textTransform: "capitalize", color: "#352f44" }}>
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

export default ItemListContainer;
