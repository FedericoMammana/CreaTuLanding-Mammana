import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { getOneProduct, getProducts } from "../mock/AsyncMock";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id)
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, [id]);

  //probando la funcion anterior de ItemListContainer
  //  useEffect(()=>{
  //     getProducts()
  //     .then((res)=> setDetalle(res.find((item)=> item.id === id)))
  //     .catch((error)=> console.log(error))
  //  },[id])

  return (
    <>
      {cargando ? (
        <LoaderComponent text={"Cargando detalle de producto"} />
      ) : (
        <ItemDetail detalle={detalle} />
      )}
    </>
  );
};

export default ItemDetailContainer;
