import React, { useState, useEffect, useReducer, useContext } from "react";
import FormLibro from "../FormLibro/FormLibro.jsx";
import ListadoLibros from "../ListadoLibros/ListadoLibros.jsx";
import { librosReducer } from "../reducers/reducer.js";
import { ContextLibros } from "../contextos/contextos.js";

const LibrosContainer = () => {
  const initialLibros = JSON.parse(localStorage.getItem("libros")) || [];
  const [libros, dispatch] = useReducer(librosReducer, initialLibros);

  useEffect(() => {
    localStorage.setItem("libros", JSON.stringify(libros));
  }, [libros]);

  return (
    <>
      <ContextLibros.Provider
        value={{
          libros: libros,
          dispatch: dispatch,
        }}
      >
        <div className="contenedor-libros">
          <FormLibro />
          <ListadoLibros />
        </div>
      </ContextLibros.Provider>
    </>
  );
};

export default LibrosContainer;
