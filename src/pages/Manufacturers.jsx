import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Manufacturers = () => {
  const [fabricantes, setFabricantes] = useState([]);  // Estado para almacenar los fabricantes
  const [loading, setLoading] = useState(true);  // Estado para manejar la carga

  useEffect(() => {
    // Función para obtener los fabricantes desde el backend
    const fetchFabricantes = async () => {
      try {
        // Realizamos la solicitud GET para obtener los fabricantes
        const response = await axios.get('http://localhost:5000/fabricantes');
        
        // Actualizamos el estado con la respuesta
        setFabricantes(response.data);  // Suponemos que la respuesta es un array de fabricantes
        setLoading(false);  // Dejamos de mostrar "Cargando..." cuando los datos son recibidos
      } catch (error) {
        console.error('Error al cargar los fabricantes:', error);
        setLoading(false);  // Si ocurre un error, dejamos de cargar
      }
    };

    fetchFabricantes();  // Llamamos a la función para obtener los fabricantes
  }, []);  // Se ejecuta solo una vez cuando el componente se monta

  // Si estamos cargando, mostramos un mensaje de carga
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
        <p>Cargando fabricantes...</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">  {/* Usamos flexbox para asegurarnos de que el footer quede al final */}
      <Header />
      
      <div className="container mt-5 flex-grow-1">
        <h1 className="text-center mb-4">Lista de Fabricantes</h1>

        {/* Si no hay fabricantes, mostramos un mensaje */}
        {fabricantes.length === 0 ? (
          <p>No se encontraron fabricantes.</p>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {/* Iteramos sobre los fabricantes y los mostramos */}
            {fabricantes.map((fabricante) => (
              <div key={fabricante.id} className="col mb-4">
                <div className="card shadow-sm rounded">
                  {/* Aseguramos que la imagen esté correctamente accesible */}
                  <img
                    src={`http://localhost:5000/${fabricante.pathImgPerfil || 'images/default-profile.jpg'}`}  // Corregimos la ruta de la imagen
                    className="card-img-top img-fluid rounded-circle"  // Imágenes redondeadas
                    alt={fabricante.nombre}
                    style={{ objectFit: 'cover', height: '200px' }}  // Aseguramos que la imagen cubra el espacio sin deformarse
                  />
                  <div className="card-body">
                    <h5 className="card-title">{fabricante.nombre}</h5>
                    <p className="card-text"><strong>Dirección:</strong> {fabricante.direccion}</p>
                    <p className="card-text"><strong>Contacto:</strong> {fabricante.numeroContacto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Manufacturers;
