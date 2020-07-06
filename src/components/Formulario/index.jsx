import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const initialDataForm = {
  nombre: "",
  precio: "",
  categoria: "",
  descripcion: "",
};

const errorsInit = {
  ...initialDataForm,
};

const Formulario = ({
  editar = false,
  detalle = false,
  agregarNuevoProducto,
  editarProducto,
  producto,
  history
}) => {
  const [dataForm, setDataForm] = useState(initialDataForm);
  const [errors, setErrors] = useState(errorsInit);

  useEffect(() => {
    if (editar || detalle) {
      console.log(producto);
      setDataForm({ ...producto });
    }
  }, []);

  const handleChange = (e) => {
    //   console.log({...dataForm});
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
    // setErrors({...errorsInit});
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const isValid = () => {
    const localErrors = { ...errorsInit };
    let respuesta = true;

    for (let key in dataForm) {
      if (key !== "id") {
        if (dataForm[key].trim() === "" || dataForm[key].length === 0) {
          localErrors[key] = "campo requerido";
          respuesta = false;
        }
      }
    }

    setErrors({ ...localErrors });

    return respuesta;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      if (editar) {
        editarProducto(dataForm);
      } else {
        agregarNuevoProducto(dataForm);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="for-group col-md-6">
          <label htmlFor="nombre">nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="ingresar nombre"
            onChange={handleChange}
            value={dataForm.nombre}
          />
          {errors.nombre && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.nombre}
            </span>
          )}
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="precio">Precio</label>
          <input
            type="text"
            className="form-control"
            name="precio"
            placeholder="ingresar precio"
            onChange={handleChange}
            value={dataForm.precio}
          />
          {errors.precio && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.precio}
            </span>
          )}
        </div>
        <div
          className="form-group d-flex justify-content-around"
          style={{ width: "100%" }}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              onChange={handleChange}
              checked={dataForm.categoria === "Postres"}
              value="Postres"
            />
            <label className="form-check-label" htmlFor="Postres">
              Postres
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              onChange={handleChange}
              checked={dataForm.categoria === "Bebidas"}
              value="Bebidas"
            />
            <label className="form-check-label" htmlFor="Bebidas">
              Bebidas
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              onChange={handleChange}
              checked={dataForm.categoria === "Cortes"}
              value="Cortes"
            />
            <label className="form-check-label" htmlFor="Cortes">
              Cortes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="categoria"
              onChange={handleChange}
              checked={dataForm.categoria === "Ensaladas"}
              value="Ensaladas"
            />
            <label className="form-check-label" htmlFor="Ensaladas">
              Ensaladas
            </label>
          </div>
          {errors.categoria && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.categoria}
            </span>
          )}
        </div>
        <div className="form-group" style={{ width: "100%" }}>
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            type="text"
            className="form-control"
            name="descripcion"
            placeholder="Descripción"
            onChange={handleChange}
            value={dataForm.descripcion}
          />
          {errors.descripcion && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.descripcion}
            </span>
          )}
        </div>
      </div>
      {!detalle && (
        <button type="submit" className="btn btn-primary">
          {editar ? "Editar Producto" : "Agregar Producto"}
        </button>)
      }
      {
        detalle&&(
          <button className="btn btn-warning" onClick={() => {history.push("/producto/buscar")}}>Volver</button>
        )
      }
    </form>
  );
};

export default withRouter(Formulario);
