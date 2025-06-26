import React from "react";
import { Routes, Route } from "react-router-dom";
import ListaLibros from "./components/LibroLista";
import CrearLibro from "./components/LibroFormulario";
import LibroDetalle from "./components/LibroDetalle";
import AutorLista from "./components/AutorLista";
import AutorManager from "./components/AutorManager";
import "./navcss.css"

function App() {
  return (
    <>
    <nav className="navbar">
      <a href="/" className="nav">Inicio</a>
      <a href="/detalle" className="nav">Detalle</a>
      <a href="/crear" className="nav">Registrar</a>
      <a href="/autores" className="nav">Autores</a>
      <a href="/autores-admin" className="nav">Autores-Detalle</a>
    </nav>
      <Routes>
        <Route path="/" element={<ListaLibros />} />
        <Route path="/crear" element={<CrearLibro />} />
        <Route path="/detalle" element={<LibroDetalle />} />
        <Route path="/autores" element={<AutorLista />} />
        <Route path="/autores-admin" element={<AutorManager />} />
      </Routes>
    </>
  );
}

export default App;
