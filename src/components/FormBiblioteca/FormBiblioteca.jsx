import React, { useState, useContext, useEffect } from "react";
import { ContextBiblioteca } from "../contextos/contextos";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const FormBiblioteca = () => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [actualizar, setActualizar] = useState(false);
  const { handlerActualizarBiblioteca, bibliotecaActualizar, dispatch } =
    useContext(ContextBiblioteca);

  useEffect(() => {
    if (bibliotecaActualizar) {
      console.log(bibliotecaActualizar);
      
      setActualizar(true);
      setNombre(bibliotecaActualizar.nombre);
      setDireccion(bibliotecaActualizar.direccion);
    }
  }, [bibliotecaActualizar]);

  const handlerNombre = (e) => {
    setNombre(e.target.value);
  };

  const handlerDireccion = (e) => {
    setDireccion(e.target.value);
  };

  function limpiarForm() {
    setNombre("");
    setDireccion("");
  }

  const handlerSubmit = (e) => {
    e.preventDefault();

    const biblioteca = {
      id:actualizar? bibliotecaActualizar.id : Math.round(Math.random() * 10000),
      nombre: nombre,
      direccion: direccion,
    };

    if (actualizar) {
      dispatch({ type: "actualizar", biblioteca });
      setActualizar(false);
    } else {
      dispatch({ type: "agregar", biblioteca: biblioteca });
    }

    limpiarForm();
  };

  const cancelar = () => {
    limpiarForm();
    handlerActualizarBiblioteca();
    setActualizar(false);
  };

  return (
    <form
      onSubmit={handlerSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        gap: "1rem",
      }}
    >
      <FormControl>
        <TextField
          label="Nombre"
          variant="outlined"
          type="text"
          value={nombre}
          onChange={handlerNombre}
          required
        />
      </FormControl>

      <FormControl>
        <TextField
          label="Direccion"
          variant="outlined"
          type="text"
          value={direccion}
          onChange={handlerDireccion}
          required
        />
      </FormControl>

      <div className="contenedor-botones">
        <Button variant="contained" type="submit">
          {actualizar ? "Actualizar" : "Guardar"}
        </Button>
        {actualizar && (
          <Button variant="contained" color="warning" onClick={cancelar}>
            Cancelar
          </Button>
        )}
      </div>
    </form>
  );
};

export default FormBiblioteca;
