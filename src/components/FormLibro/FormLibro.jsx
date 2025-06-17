import React, { useState, useContext } from "react";
import { ContextLibros } from "..//contextos/contextos.js";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const FormLibro = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");
  const { dispatch } = useContext(ContextLibros);

  const handlerNombre = (e) => {
    setNombre(e.target.value);
  };

  const handlerDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const handlerGenero = (e) => {
    setGenero(e.target.value);
  };

  function limpiarForm() {
    setNombre("");
    setDescripcion("");
    setGenero("");
  }

  const handlerSubmit = (e) => {
    e.preventDefault();

    const libro = {
      id: Math.round(Math.random() * 10000),
      nombre: nombre,
      descripcion: descripcion,
      fechaIngreso: new Date().toLocaleDateString(),
      genero: genero,
    };

    dispatch({ type: "agregar", libro: libro });

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
          label="Descripción"
          variant="outlined"
          type="text"
          value={descripcion}
          onChange={handlerDescripcion}
          required
        />
      </FormControl>

      <FormControl>
        <InputLabel id="genero-label">Género</InputLabel>
        <Select
          labelId="genero-label"
          id="genero"
          value={genero}
          onChange={handlerGenero}
          required
        >
          <MenuItem value="Terror">Terror</MenuItem>
          <MenuItem value="Fantasia">Fantasía</MenuItem>
          <MenuItem value="Comedia">Comedia</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" type="submit">
        Guardar
      </Button>
    </form>
  );
};

export default FormLibro;
