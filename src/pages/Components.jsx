import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Components = () => {
  // Estado para almacenar los componentes
  const [componentes, setComponentes] = useState([]);
  const [loading, setLoading] = useState(true);  // Estado para mostrar el cargando

  useEffect(() => {
    // Función para obtener todos los componentes desde el backend
    const fetchComponents = async () => {
      try {
        // Hacemos la solicitud GET al backend
        const response = await axios.get('http://localhost:5000/componentes');
        
        // Establecemos los datos en el estado
        setComponentes(response.data); // Suponiendo que la respuesta es un array de componentes
        setLoading(false); // Ya hemos recibido los datos, dejamos de cargar
      } catch (error) {
        console.error('Error al cargar los componentes:', error);
        setLoading(false); // Si ocurre un error, dejamos de cargar
      }
    };

    fetchComponents(); // Llamamos a la función para cargar los componentes
  }, []); // Se ejecuta una sola vez cuando el componente se monta

  // Si estamos cargando, mostramos un mensaje de carga
  if (loading) {
    return <p>Cargando componentes...</p>;
  }

  return (
    <div className="d-flex flex-column min-vh-100">  {/* Aseguramos que la altura mínima es del 100% */}
      <Header />
      
      {/* Contenedor principal para el contenido */}
      <div className="container mt-5 flex-grow-1">
        <h1>Lista de Componentes</h1>

        {/* Si no hay componentes, mostramos un mensaje */}
        {componentes.length === 0 ? (
          <p>No se encontraron componentes.</p>
        ) : (
          <div className="row">
            {/* Iteramos sobre los componentes y los mostramos */}
            {componentes.map((componente) => (
              <div key={componente.id} className="col-md-4 mb-4">
                <div className="card">
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
