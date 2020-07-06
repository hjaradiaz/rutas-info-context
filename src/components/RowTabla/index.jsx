import React, {useContext} from "react";
import { Link } from "react-router-dom";

import ProductosContext from "../../context/Productos/ProductoContext";

// import withApi from '../../HOC/withApi';

const RowTabla = (props) => {
  const productosContext = useContext(ProductosContext);
  const { eliminarProducto } = productosContext;

  const { indice } = props;
  const { id, precio, nombre, categoria } = props.plato;
  return (
    <tr>
      <th scope="row">{indice + 1}</th>
      <td>{nombre}</td>
      <td>{categoria}</td>
      <td>{precio}</td>
      <td className="d-flex justify-content-around">
        <Link to={`/producto/editar/${id}`} className="btn btn-warning">
          Editar
        </Link>
        {/* <button className="btn btn-info">Ver Detalle</button> */}
        <button
          className="btn btn-danger"
          onClick={() => eliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default RowTabla;
// export default withApi(RowTabla);
