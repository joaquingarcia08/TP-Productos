import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Components = () => {
  const [componentes, setComponentes] = useState([]);
  const [loading, setLoading] = useState(true);  // Estado para mostrar el cargando

  useEffect(() => {
    // Función para obtener todos los componentes desde el backend
    const fetchComponents = async () => {
      try {
        // Hacemos la solicitud GET al backend
        const response = await axios.get('http://localhost:5000/componentes');
        
        // Establecemos los datos en el estado
        setComponentes(response.data); 
        setLoading(false); 
      } catch (error) {
        console.error('Error al cargar los componentes:', error);
        setLoading(false); // Si ocurre un error, dejamos de cargar
      }
    };

    fetchComponents();
  }, []); 

  // Si estamos cargando, mostramos un spinner
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Cargando...</span>
        </div>
        <p>Cargando componentes...</p>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">  {/* Aseguramos que la altura mínima es del 100% */}
      <Header />
      
      {/* Contenedor principal para el contenido */}
      <div className="container mt-5 flex-grow-1">
        <h1 className="text-center mb-4">Lista de Componentes</h1>

        {/* Si no hay componentes, mostramos un mensaje */}
        {componentes.length === 0 ? (
          <p>No se encontraron componentes.</p>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {/* Iteramos sobre los componentes y los mostramos */}
            {componentes.map((componente) => (
              <div key={componente.id} className="col mb-4">
                <div className="card shadow-sm rounded">
                  <div className="card-body">
                    <h5 className="card-title">{componente.nombre}</h5>
                    <p className="card-text">{componente.descripcion}</p>
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

export default Components;
