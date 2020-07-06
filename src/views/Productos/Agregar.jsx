import React, { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { withRouter } from "react-router-dom";

import Formulario from "../../components/Formulario";

// import withApi from '../../HOC/withApi';

import ProductosContext from "../../context/Productos/ProductoContext";

const Agregar = (props) => {
  const productosContext = useContext(ProductosContext);
  const { agregarProducto, addOk } = productosContext;

  useEffect(() => {
      if(addOk) {
          props.history.push("/");
      }
  }, [addOk]);

  const nuevoProducto = (producto) => {
    const newProduct = { ...producto, id: uuidv4() };
    console.log("Producto para agregar");
    console.log(newProduct);
    agregarProducto(newProduct);
    // props.agregarProducto(newProduct);
  };

  return (
    <div>
      <h1>Agregar Producto</h1>
      <Formulario agregarNuevoProducto={nuevoProducto} />
    </div>
  );
};

export default withRouter(Agregar);
// export default withApi(Agregar);
