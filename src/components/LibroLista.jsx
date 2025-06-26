import React, { useEffect, useState } from "react";
import axios from "axios";
import "../lista-libros.css"

const LibroLista = () => {
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    axios
      .get("https://libros-0gqz.onrender.com/api/LibroMaterial")
      .then((res) => setLibros(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="cont-libreria">
      <h2 className="text-xl font-semibold mb-2 titulo">Lista de Libros</h2>
      <ul className="libros">
        {libros.map((libro) => (
          <li key={libro.libreriaMaterialId}>
            {libro.titulo} - {libro.fechaPublicacion?.split("T")[0]} - Id: {libro.libreriaMaterialId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LibroLista;
