import React, { useState, useContext } from "react";
import { ContextBiblioteca } from "../contextos/contextos";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Biblioteca = ({ biblioteca }) => {
  const { handlerActualizarBiblioteca, dispatch } =
    useContext(ContextBiblioteca);

  function ejecutarEliminar() {
    dispatch({ type: "eliminar", id: biblioteca.id });
  }

  return (
    <TableRow
      key={biblioteca.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {biblioteca.id}
      </TableCell>
      <TableCell align="right">{biblioteca.nombre}</TableCell>
      <TableCell align="right">{biblioteca.direccion}</TableCell>
      <TableCell align="right">
        <DeleteIcon onClick={ejecutarEliminar} />
        <EditIcon onClick={() => handlerActualizarBiblioteca(biblioteca)} />
      </TableCell>
    </TableRow>
  );
};

export default Biblioteca;
