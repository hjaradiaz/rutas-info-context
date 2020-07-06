import React, { useState, useEffect } from "react";

import axios from "axios";

import { withRouter } from "react-router-dom";

const withApi = (ComponenteOriginal, opcion = false) => {
  const NuevoComponente = (props) => {
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
      if (opcion) {
        obtenerProductos();
      }
    }, []);

    // useEffect(() => {
    //   obtenerProductos();
    // }, [listaProductos]);

    const obtenerProductos = async () => {
      console.log("ejecutando el obtener productos");
      const resultado = await axios.get("http://localhost:4000/restaurant");
      setListaProductos(resultado.data);
    };

    const agregarProducto = async (producto) => {
      const resultado = await axios.post("http://localhost:4000/restaurant", {
        ...producto,
      });
      props.history.push("/productos");
    };

    const obtenerProducto = async (id) => {
      try {
        const resultado = await axios.get(
          "http://localhost:4000/restaurant/?id=" + id
        );
        return resultado.data[0];
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
        props.history.push("/productos");
      } catch (error) {
        console.log(error);
      }
    };

    const eliminarProducto = async (id) => {
      try {
        const resultado = await axios.delete(
          "http://localhost:4000/restaurant/" + id
        );
        obtenerProductos();
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <ComponenteOriginal
        listaProductos={listaProductos}
        agregarProducto={agregarProducto}
        obtenerProducto={obtenerProducto}
        editarProducto={editarProducto}
        eliminarProducto={eliminarProducto}
        {...props}
      />
    );
  };

  return withRouter(NuevoComponente);
};

export default withApi;
