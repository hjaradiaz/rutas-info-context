import React from "react";
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        Comidas
      </Link>
      
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" exact to="/productos">
              Productos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" exact to="/producto/nuevo">
              Agregar Productos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" exact to="/producto/buscar">
              Buscar Productos
            </NavLink>
          </li>
          </ul>
      </div>
    </nav>
  );
};

export default Header;
