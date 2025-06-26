import React, { useState } from "react";
import axios from "axios";
import "../libro-formulario.css"

const LibroFormulario = () => {
  const [titulo, setTitulo] = useState("");
  const [autorLibro, setAutorLibro] = useState("");
  const [fechaPublicacion, setFechaPublicacion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoLibro = {
      titulo,
      autorLibro,
      fechaPublicacion,
    };

    axios
      .post("https://libros-0gqz.onrender.com/api/LibroMaterial", nuevoLibro)
      .then((res) => {
        alert("Libro creado correctamente");
        setTitulo("");
        setAutorLibro("");
        setFechaPublicacion("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 form-libro">
      <h2 className="text-xl font-semibold mb-2">Nuevo Libro</h2>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
        className="border p-2 mb-2 block w-full"
      />
      <input
        type="text"
        placeholder="Autor (GUID)"
        value={autorLibro}
        onChange={(e) => setAutorLibro(e.target.value)}
        required
        className="border p-2 mb-2 block w-full"
      />
      <input
        type="date"
        value={fechaPublicacion}
        onChange={(e) => setFechaPublicacion(e.target.value)}
        required
        className="border p-2 mb-2 block w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Guardar
      </button>
    </form>
  );
};

export default LibroFormulario;
