import React, { useEffect, useState } from "react";
import axios from "axios";
import "../lista-autores.css"; // Puedes crear un archivo CSS similar

const AutorLista = () => {
  const [autores, setAutores] = useState([]);

  useEffect(() => {
    axios
      .get("https://autorlibros.onrender.com/api/AutorControlador")
      .then((res) => setAutores(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="cont-libreria">
      <h2 className="text-xl font-semibold mb-2 titulo">Lista de Autores</h2>
      <ul className="libros">
        {autores.map((autor) => (
          <li key={autor.autorLibroGuid}>
            {autor.nombre} {autor.apellido} - Nacido: {autor.fechaNacimiento?.split("T")[0]} - Id: {autor.autorLibroGuid}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutorLista;
