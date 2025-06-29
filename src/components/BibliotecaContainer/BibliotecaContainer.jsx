import React, { useState, useEffect, useReducer, useContext } from "react";
import FormBiblioteca from "../FormBiblioteca/FormBiblioteca.jsx";
import ListadoBiblioteca from "../ListadoBiblioteca/ListadoBiblioteca.jsx";
import { bibliotecaReducer } from "../reducers/reducer.js";
import { ContextBiblioteca } from "../contextos/contextos.js";

const BibliotecaContainer = () => {
    const initialBibliotecas = JSON.parse(localStorage.getItem("biblioteca")) || [];
    const [bibliotecas, dispatch] = useReducer(bibliotecaReducer, initialBibliotecas);
  
    useEffect(() => {
      localStorage.setItem("biblioteca", JSON.stringify(bibliotecas));
    }, [bibliotecas]);

  return (
        <>
          <ContextBiblioteca.Provider
            value={{
              bibliotecas: bibliotecas,
              dispatch: dispatch,
            }}
          >
            <div className="contenedor-libros">
              <FormBiblioteca />
              <ListadoBiblioteca />
            </div>
          </ContextBiblioteca.Provider>
        </>
  )
}

export default BibliotecaContainer