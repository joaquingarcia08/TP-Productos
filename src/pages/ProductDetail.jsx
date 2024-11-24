import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el ID del producto desde la URL
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Obtén el ID del producto de la URL
  const [producto, setProducto] = useState(null);
  const [fabricantes, setFabricantes] = useState([]);
  const [componentes, setComponentes] = useState([]);
  
  useEffect(() => {
    // Obtener los detalles del producto, fabricantes y componentes asociados
    const fetchProductDetails = async () => {
      try {
        const productResponse = await axios.get(`http://localhost:5000/productos/${id}`);
        const fabricantesResponse = await axios.get(`http://localhost:5000/productos/${id}/fabricantes`);
        const componentesResponse = await axios.get(`http://localhost:5000/productos/${id}/componentes`);
        
        setProducto(productResponse.data);
        setFabricantes(fabricantesResponse.data);
        setComponentes(componentesResponse.data);
      } catch (error) {
        console.error('Error al cargar los detalles del producto:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (!producto) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container mt-5">
      <h1>{producto.nombre}</h1>
      <div className="row">
        <div className="col-md-6">
          {/* Imagen del producto */}
          <img
            src={producto.pathImg || 'https://via.placeholder.com/300'}
            alt={producto.nombre}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          {/* Descripción y precio del producto */}
          <p><strong>Descripción:</strong> {producto.descripcion}</p>
          <p><strong>Precio:</strong> ${producto.precio.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-5">
        <h3>Fabricantes Asociados</h3>
        <div className="row">
          {fabricantes.map((fabricante) => (
            <div key={fabricante.id} className="col-md-4">
              <div className="card">
                <img
                  src={fabricante.pathImgPerfil || 'https://via.placeholder.com/150'}
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
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h3>Componentes Asociados</h3>
        <ul>
          {componentes.map((componente) => (
            <li key={componente.id}>
              <strong>{componente.nombre}</strong>: {componente.descripcion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
