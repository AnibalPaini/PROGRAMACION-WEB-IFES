import React, { useState, useContext } from "react";
import { ContextLibros } from "../contextos/contextos";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Libro = ({ libro }) => {
  const { handlerActualizarLibro,dispatch } = useContext(ContextLibros);

  function ejecutarEliminar() {
    dispatch({ type: "eliminar", id: libro.id });
  }

  return (
    <TableRow
      key={libro.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {libro.id}
      </TableCell>
      <TableCell align="right">{libro.nombre}</TableCell>
      <TableCell align="right">{libro.descripcion}</TableCell>
      <TableCell align="right">{libro.fechaIngreso}</TableCell>
      <TableCell align="right">{libro.genero}</TableCell>
      <TableCell align="right"><DeleteIcon onClick={ejecutarEliminar}/><EditIcon onClick={()=>handlerActualizarLibro(libro)}/></TableCell>
    </TableRow>
  );
};

export default Libro;
