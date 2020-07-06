import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

/** Components */
import Header from "./components/Header";

/** Views */
import Productos from "./views/Productos";
import AgregarProducto from "./views/Productos/Agregar";
import EditarProducto from "./views/Productos/Editar";
import BuscarProducto from "./views/Productos/Buscar";
import DetalleProducto from "./views/Productos/Detalle";
import ProductosState from "./context/Productos/ProductosState";

function App() {
  return (
    <BrowserRouter>
      <ProductosState>
        <Header />
        <main className="container">
          <Switch>
            <Route exact path="/">
              <Redirect to="/productos"></Redirect>
            </Route>
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/producto/nuevo" component={AgregarProducto} />
            <Route
              exact
              path="/producto/editar/:id"
              component={EditarProducto}
            />
            <Route
              exact
              path="/producto/detalle/:id"
              component={DetalleProducto}
            />
            <Route exact path="/producto/buscar" component={BuscarProducto} />
          </Switch>
        </main>
      </ProductosState>
    </BrowserRouter>
  );
}

export default App;
