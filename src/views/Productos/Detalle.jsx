import React, { useEffect, useContext } from 'react';
import Formulario from "../../components/Formulario";
import { withRouter } from "react-router-dom";

import ProductosContext from "../../context/Productos/ProductoContext";

const Detalle = (props) => {
    const productosContext = useContext(ProductosContext);
    const {
        obtenerProducto,
        producto,
    } = productosContext;


    useEffect(() => {
        obtenerProducto(props.match.params.id);
      }, []);


    return (
        <div>
            <h1>Detalle del Producto</h1>
            {Object.keys(producto).length > 0 && (
                <Formulario
                    producto={producto}
                    detalle={true}
                />
            )}
        </div>
    );
};

export default withRouter(Detalle);