import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

const Catalog = () => {
  const [productos, setProductos] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar el estado de carga

  useEffect(() => {
    // Función para obtener los productos desde el backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/productos'); // URL de tu API
        setProductos(response.data); // Guardamos los productos en el estado
        setLoading(false); // Terminamos la carga
      } catch (error) {
        console.error('Error al cargar los productos:', error);
        setLoading(false);
      }
    };

    fetchProducts(); // Llamada a la función para obtener los productos
  }, []); // Se ejecuta una sola vez cuando el componente se monta

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div><Header />
    <div className="container mt-5">
      <h1>Catálogo de Productos</h1>
      <div className="row">
        {/* Iteramos sobre los productos y mostramos una tarjeta para cada uno */}
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
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
