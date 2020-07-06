import React, { useState, useEffect, useContext } from "react";
// import withApi from "../../HOC/withApi";
import queryString from "query-string";
import { useLocation, Link } from "react-router-dom";

import ProductosContext from "../../context/Productos/ProductoContext";

const Buscar = (props) => {
  const productosContext = useContext(ProductosContext);
  const { listaProductos, obtenerProductos } = productosContext;

  console.log(listaProductos);

  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    console.log("llamando al obtener productos");
    obtenerProductos();
  }, []);

  useEffect(() => {
    setProductosFiltrados(listaProductos);
  }, [listaProductos]);

  const location = useLocation();
  console.log("location");
  console.log(location);

  const { q = "" } = queryString.parse(location.search);

  const [textoBuscado, setTextoBuscado] = useState(q);

  const handleChange = (e) => {
    setTextoBuscado(e.target.value);
    props.history.push(`?q=${e.target.value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let listaFiltrada = listaProductos;
    if (q !== "") {
      listaFiltrada = listaProductos.filter((producto) =>
        producto.nombre.toLowerCase().includes(q)
      );
    }
    setProductosFiltrados(listaFiltrada);
  };
  return (
    <div>
      <h1>Buscar Producto</h1>
      <section className="row">
        <div className="col-5">
          <form className="form-inline" onSubmit={handleSubmit}>
            <div className="form-group mx-sm-3 mb-2">
              <label className="sr-only" htmlFor="">
                Ingresar nombre
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese nombre"
                name="textoBuscado"
                onChange={handleChange}
                value={textoBuscado}
              />
            </div>
            <button className="btn btn-primary mb-2">Buscar</button>
          </form>
        </div>
        <div className="col-7">
          {productosFiltrados.length > 0 &&
            productosFiltrados.map((item) => (
              <div
                key={item.id}
                className="card mb-3"
                style={{ width: "540px" }}
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="card-body">
                      <h5 className="card-title">{item.nombre}</h5>
                      <p>{item.categoria}</p>
                      <p>{item.precio}</p>
                      <p>{item.descripcion}</p>
                      <Link to={`/producto/detalle/${item.id}`} className="btn btn-primary">
                        Ver Detalle
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Buscar;
// export default withApi(Buscar, true);
