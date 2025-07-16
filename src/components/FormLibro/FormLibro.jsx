import React, { useState, useContext, useEffect } from "react";
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
  const [actualziar, setActualizar] = useState(false);
  const { handlerActualizarLibro, libroActualizar, dispatch } =
    useContext(ContextLibros);

  useEffect(() => {
    if (libroActualizar) {
      console.log(libroActualizar);
      
      setActualizar(true);
      setNombre(libroActualizar.nombre);
      setDescripcion(libroActualizar.descripcion);
      setGenero(libroActualizar.genero);
    }
  }, [libroActualizar]);

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
      id: actualziar ? libroActualizar.id : Math.round(Math.random() * 10000),
      nombre: nombre,
      descripcion: descripcion,
      fechaIngreso: new Date().toLocaleDateString(),
      genero: genero,
    };

    if (actualziar) {
      dispatch({ type: "actualizar", libro});
      setActualizar(false);
    } else {
      dispatch({ type: "agregar", libro: libro });
    }

    limpiarForm();
  };

  const cancelar = () => {
    limpiarForm();
    handlerActualizarLibro();
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

      <div className="contenedor-botones">
        <Button variant="contained" type="submit">
          {actualziar ? "Actualizar" : "Guardar"}
        </Button>
        {actualziar && (
          <Button variant="contained" color="warning" onClick={cancelar}>
            Cancelar
          </Button>
        )}
      </div>
    </form>
  );
};

export default FormLibro;
