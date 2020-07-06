import React, { useEffect, useState, useContext } from "react";
import Formulario from "../../components/Formulario";
import { withRouter } from "react-router-dom";

import ProductosContext from "../../context/Productos/ProductoContext";

const Editar = (props) => {
  const productosContext = useContext(ProductosContext);
  const {
    obtenerProducto,
    editarProducto,
    editOk,
    producto,
  } = productosContext;

  useEffect(() => {
    obtenerProducto(props.match.params.id);
  }, []);

  useEffect(() => {
    if (editOk) {
      props.history.push("/");
    }
  }, [editOk]);

  const edicion = (producto) => {
    editarProducto(producto);
    // props.editarProducto(producto);
  };

  return (
    <div>
      <h1>Editar Producto</h1>
      {Object.keys(producto).length > 0 && (
        <Formulario
          producto={producto}
          editar={true}
          editarProducto={edicion}
        />
      )}
    </div>
  );
};

export default withRouter(Editar);
// export default withApi(Editar);
