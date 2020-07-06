import React from "react";
import RowTabla from "../RowTabla";
const Tabla = (props) => {
  const { listaProductos } = props;
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Categoria</th>
          <th scope="col">Precio</th>
          <th scope="col" className="text-center">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {listaProductos.map((item, index) => (
          <RowTabla key={item.id} indice={index} plato={item} />
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
