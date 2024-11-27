import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Catalog = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]); // Estado del carrito
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/productos');
        setProductos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const agregarAlCarrito = (producto) => {
    const productoEnCarrito = carrito.find((item) => item.id === producto.id);

    if (productoEnCarrito) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      // Agregar nuevo producto al carrito
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  };

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

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
        <h1 className="text-center mb-4">Catálogo de Productos</h1>
        <div className="row">
          <div className="col-md-8">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              {productos.map((producto) => (
                <div key={producto.id} className="col mb-4">
                  <ProductCard
                    producto={producto}
                    agregarAlCarrito={agregarAlCarrito}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sección del carrito */}
          <div className="col-md-4">
            <h3>Carrito de Compras</h3>
            {carrito.length === 0 ? (
              <p>No hay productos en el carrito.</p>
            ) : (
              <ul className="list-group">
                {carrito.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      {item.nombre} - ${item.precio.toFixed(2)} x {item.cantidad}
                    </div>
                    <button
                      onClick={() => eliminarDelCarrito(item.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <h4 className="mt-4">Total: ${calcularTotal()}</h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
