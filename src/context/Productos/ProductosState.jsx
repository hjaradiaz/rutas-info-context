import React, { useReducer } from "react";

import axios from "axios";

import ProductosContext from "./ProductoContext";
import ProductoReducer from "./ProductoReducer";

const ProductosState = (props) => {
  const intialState = {
    listaProductos: [],
    addOk: false,
    editOk: false,
    deleteOk: false,
    producto: {},
  };

  const obtenerProductos = async () => {
    try {
      console.log("ejecutando el obtener productos");
      const resultado = await axios.get("http://localhost:4000/restaurant");
      dispatch({
        payload: resultado.data,
        type: "OBTENER_PRODUCTOS",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const agregarProducto = async (producto) => {
    try {
      const resultado = await axios.post("http://localhost:4000/restaurant", {
        ...producto,
      });
      dispatch({
        payload: true,
        type: "AGREGAR_PRODUCTO",
      });
    } catch (error) {}
  };

  const obtenerProducto = async (id) => {
    try {
      const resultado = await axios.get(
        "http://localhost:4000/restaurant/?id=" + id
      );
      dispatch({
        payload: resultado.data[0],
        type: "OBTENER_PRODUCTO",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editarProducto = async (producto) => {
    try {
      const resultado = await axios.put(
        "http://localhost:4000/restaurant/" + producto.id,
        {
          ...producto,
        }
      );
      dispatch({
        payload: true,
        type: "EDITAR_PRODUCTO",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      const resultado = await axios.delete(
        "http://localhost:4000/restaurant/" + id
      );
      dispatch({
        payload: true,
        type: "ELIMINAR_PRODUCTO",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [state, dispatch] = useReducer(ProductoReducer, intialState);

  return (
    <ProductosContext.Provider
      value={{
        listaProductos: state.listaProductos,
        addOk: state.addOk,
        producto: state.producto,
        editOk: state.editOk,
        deleteOk: state.deleteOk,
        obtenerProductos,
        agregarProducto,
        obtenerProducto,
        editarProducto,
        eliminarProducto
      }}
    >
      {props.children}
    </ProductosContext.Provider>
  );
};

export default ProductosState;
