import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ producto, agregarAlCarrito }) => {
  const { id, nombre, descripcion, precio, pathImg } = producto;
  const imageUrl = `http://localhost:5000/${pathImg}`;

  return (
    <div className="card h-100 shadow-sm">
      {/* Imagen del producto */}
      {pathImg ? (
        <img
          src={imageUrl}
          className="card-img-top"
          alt={nombre}
          style={{ objectFit: 'cover', height: '200px' }}
        />
      ) : (
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="Producto sin imagen"
          style={{ objectFit: 'cover', height: '200px' }}
        />
      )}

      {/* Contenido de la tarjeta */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">
          <strong>Precio:</strong> ${precio.toFixed(2)}
        </p>

        {/* Botones: Ver detalles y Agregar al carrito */}
        <div className="mt-auto">
          <Link to={`/producto/${id}`} className="btn btn-primary mb-2 w-100">
            Ver Detalles
          </Link>
          <button
            onClick={() => agregarAlCarrito(producto)}
            className="btn btn-success w-100"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
