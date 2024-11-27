import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const Catalog = () => {
  const [productos, setProductos] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Función para obtener los productos desde el backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/productos'); // URL de API
        setProductos(response.data); // Guardamos los productos en el estado
        setLoading(false); // Terminamos la carga
      } catch (error) {
        console.error('Error al cargar los productos:', error);
        setLoading(false);
      }
    };

    fetchProducts(); // Llamada a la función para obtener los productos
  }, []); // Se ejecuta una sola vez cuando el componente se monta

  // Si estamos cargando, mostramos un spinner
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container mt-5">
        {/* Título con un margen superior adecuado */}
        <h1 className="text-center mb-4">Catálogo de Productos</h1>
        
        {/* Contenedor para las tarjetas de productos */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 mt-4">
          {/* Iteramos sobre los productos y mostramos una tarjeta para cada uno */}
          {productos.map((producto) => (
            <div key={producto.id} className="col mb-4">
              <ProductCard
                id={producto.id}
                nombre={producto.nombre}
                descripcion={producto.descripcion}
                precio={producto.precio}
                pathImg={producto.pathImg}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
