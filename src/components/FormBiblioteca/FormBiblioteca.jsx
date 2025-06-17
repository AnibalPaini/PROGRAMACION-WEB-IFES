import React, { useState, useContext } from "react";
import { ContextBiblioteca } from '../contextos/contextos';
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

const FormBiblioteca = () => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const { dispatch } = useContext(ContextBiblioteca);

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
      id: Math.round(Math.random() * 10000),
      nombre: nombre,
      direccion: direccion,
    };

    dispatch({ type: "agregar", biblioteca: biblioteca });

    limpiarForm();
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

      <Button variant="contained" type="submit">
        Guardar
      </Button>
    </form>
  );
};

export default FormBiblioteca