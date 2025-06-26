import React, { useState } from "react";
import axios from "axios";
import "../autor-manager.css"; // Puedes agregar estilos si quieres

const AutorManager = () => {
  const [autor, setAutor] = useState({
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
  });

  const [busquedaId, setBusquedaId] = useState("");
  const [busquedaNombre, setBusquedaNombre] = useState("");
  const [resultado, setResultado] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const urlBase = "https://autorlibros.onrender.com/api/AutorControlador";

  const insertarAutor = async () => {
    try {
      const res = await axios.post(urlBase, autor);
      setMensaje("✅ Autor insertado correctamente.");
      setResultado(null);
    } catch (err) {
      console.error(err);
      setMensaje("❌ Error al insertar autor.");
    }
  };

  const buscarPorId = async () => {
    try {
      const res = await axios.get(`${urlBase}/${busquedaId}`);
      setResultado(res.data);
      setMensaje("");
    } catch (err) {
      console.error(err);
      setMensaje("❌ Autor no encontrado por ID.");
      setResultado(null);
    }
  };

  const buscarPorNombre = async () => {
    try {
      const res = await axios.get(`${urlBase}/nombre/${busquedaNombre}`);
      setResultado(res.data);
      setMensaje("");
    } catch (err) {
      console.error(err);
      setMensaje("❌ Autor no encontrado por nombre.");
      setResultado(null);
    }
  };

  return (
    <div className="autor-manager">
      <h2>Gestión de Autores</h2>

      <section>
        <h3>➕ Insertar Autor</h3>
        <input
          type="text"
          placeholder="Nombre"
          value={autor.nombre}
          onChange={(e) => setAutor({ ...autor, nombre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={autor.apellido}
          onChange={(e) => setAutor({ ...autor, apellido: e.target.value })}
        />
        <input
          type="date"
          value={autor.fechaNacimiento}
          onChange={(e) => setAutor({ ...autor, fechaNacimiento: e.target.value })}
        />
        <button onClick={insertarAutor}>Guardar Autor</button>
      </section>

      <section>
        <h3>🔍 Buscar Autor por ID</h3>
        <input
          type="text"
          placeholder="ID del autor"
          value={busquedaId}
          onChange={(e) => setBusquedaId(e.target.value)}
        />
        <button onClick={buscarPorId}>Buscar por ID</button>
      </section>

      <section>
        <h3>🔍 Buscar Autor por Nombre</h3>
        <input
          type="text"
          placeholder="Nombre del autor"
          value={busquedaNombre}
          onChange={(e) => setBusquedaNombre(e.target.value)}
        />
        <button onClick={buscarPorNombre}>Buscar por Nombre</button>
      </section>

      {mensaje && <p className="mensaje">{mensaje}</p>}

      {resultado && (
        <div className="resultado">
          <h4>📄 Resultado:</h4>
          <p><strong>Nombre:</strong> {resultado.nombre}</p>
          <p><strong>Apellido:</strong> {resultado.apellido}</p>
          <p><strong>Fecha Nacimiento:</strong> {resultado.fechaNacimiento?.split("T")[0]}</p>
          <p><strong>ID:</strong> {resultado.autorLibroGuid}</p>
        </div>
      )}
    </div>
  );
};

export default AutorManager;
