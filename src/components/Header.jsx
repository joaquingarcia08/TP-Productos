import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg"

export default function Header() {
  return (
    <header className="bg-dark text-white p-3 shadow">
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={logo}
          alt="Logo"
          style={{ height: '70px' }}
          className="mr-3 rounded shadow"
        />
        <h1 style={{ fontSize: '70px' }} className="text-center">Empresa CompuWorld</h1>
      </div>

      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/catalogo">Catálogo de Productos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/fabricantes">Fabricantes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/componentes">Componentes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
