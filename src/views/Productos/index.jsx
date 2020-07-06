import React, { useContext, useEffect } from "react";

import Tabla from "../../components/Tabla";
import ProductosContext from "../../context/Productos/ProductoContext";

const Productos = () => {
  const productosContext = useContext(ProductosContext);
  const { listaProductos, obtenerProductos, deleteOk } = productosContext;

  useEffect(() => {
    obtenerProductos();
  }, []);

  useEffect(() => {
    if (deleteOk) {
      obtenerProductos();
    }
  }, [deleteOk]);

  return (
    <div>
      <h1>Listado de productos</h1>
      {listaProductos.length > 0 && <Tabla listaProductos={listaProductos} />}
    </div>
  );
};

export default Productos;
