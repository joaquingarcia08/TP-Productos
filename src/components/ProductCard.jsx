import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, nombre, descripcion, precio, pathImg }) => {
  // Construir la URL completa de la imagen
  const imageUrl = `http://localhost:5000/${pathImg}`;

  return (
    <div className="card h-100 shadow-sm">
      {/* Imagen del producto */}
      {pathImg ? (
        <img
          src={imageUrl}
          className="card-img-top"
          alt={nombre}
          style={{ objectFit: 'cover', height: '200px' }}  // Ajustamos la imagen
        />
      ) : (
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="Producto sin imagen"
          style={{ objectFit: 'cover', height: '200px' }}  // Imagen por defecto con el mismo ajuste
        />
      )}

      {/* Contenido de la tarjeta */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-text">
          <strong>Precio:</strong> ${precio.toFixed(2)}
        </p>
        {/* Enlace a ProductDetail pasando el ID del producto */}
        <Link to={`/producto/${id}`} className="btn btn-primary mt-auto">
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
