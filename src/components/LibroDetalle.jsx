// src/components/LibroDetalle.jsx
import React, { useState } from 'react';
import axios from 'axios';
import "../libro-detalle.css"

const LibroDetalle = () => {
  const [id, setId] = useState('');
  const [libro, setLibro] = useState(null);
  const [error, setError] = useState('');

  const handleBuscar = async () => {
    try {
      const response = await axios.get(`https://libros-0gqz.onrender.com/api/LibroMaterial/${id}`);
      setLibro(response.data);
      setError('');
    } catch (err) {
      setLibro(null);
      setError('Libro no encontrado.');
    }
  };

  return (
    <div className='detalle-libro-container'>
      <h2>Buscar Libro por ID</h2>
      <input
        type="text"
        placeholder="ID del libro"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleBuscar}>Buscar</button>

      {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
      {libro && (
        <div  className="resultado">
          <h3>{libro.titulo}</h3>
          <p>Autor ID: {libro.autorLibro}</p>
          <p>Fecha de publicación: {new Date(libro.fechaPublicacion).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default LibroDetalle;
