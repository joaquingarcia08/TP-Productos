import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [fabricantes, setFabricantes] = useState([]);
  const [componentes, setComponentes] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Obtener los datos del producto
        const productResponse = await axios.get(`http://localhost:5000/productos/${id}`);
        const fabricantesResponse = await axios.get(`http://localhost:5000/productos/${id}/fabricantes`);
        const componentesResponse = await axios.get(`http://localhost:5000/productos/${id}/componentes`);

        setProducto(productResponse.data);
        setFabricantes(fabricantesResponse.data.Fabricantes);
        setComponentes(componentesResponse.data.Componentes);

      } catch (error) {
        console.error('Error al cargar los detalles del producto:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  // Si no hay producto cargado, mostramos "Cargando..."
  if (!producto) {
    return <p>Cargando...</p>;
  }


  const getImageUrl = (path) => {
    return path ? `http://localhost:5000/${path}` : 'https://via.placeholder.com/300';
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        {/* Título del producto */}
        <h1 className="text-center mb-4 display-4">{producto.nombre}</h1>
        <div className="row">
          {/* Imagen del producto */}
          <div className="col-md-6 mb-4">
            <img
              src={getImageUrl(producto.pathImg)}
              alt={producto.nombre}
              className="img-fluid rounded shadow-sm"  
            />
          </div>

          {/* Descripción y precio del producto */}
          <div className="col-md-6">
            <p><strong className="h5">Descripción:</strong> {producto.descripcion}</p>
            <p><strong className="h5">Precio:</strong> ${producto.precio.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="mb-4">Fabricantes Asociados</h3>
          <div className="row">
            {/* Verificamos si fabricantes tiene datos */}
            {fabricantes.length > 0 ? (
              fabricantes.map((fabricante) => (
                <div key={fabricante.id} className="col-md-4 mb-4">
                  <div className="card shadow-sm">
                    <img
                      src={getImageUrl(fabricante.pathImgPerfil)}
                      className="card-img-top"
                      alt={fabricante.nombre}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{fabricante.nombre}</h5>
                      <p className="card-text">{fabricante.direccion}</p>
                      <p className="card-text">{fabricante.numeroContacto}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No se encontraron fabricantes.</p>  
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="mb-4">Componentes Asociados</h3>
          <ul>
            {/* Verificamos si componentes tiene datos */}
            {componentes.length > 0 ? (
              componentes.map((componente) => (
                <li key={componente.id}>
                  <strong>{componente.nombre}</strong>: {componente.descripcion}
                </li>
              ))
            ) : (
              <p>No se encontraron componentes.</p> 
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
