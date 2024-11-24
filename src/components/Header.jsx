import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
        <header className="bg-dark text-white p-3">
          <h1>Empresa CompuWorld</h1>
          <nav>
            <ul className="nav">
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
  )
}
