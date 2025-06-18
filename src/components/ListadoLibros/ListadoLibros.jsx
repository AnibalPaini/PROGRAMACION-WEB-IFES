import React, { useContext } from "react";
import Libro from "../Libro/Libro.jsx";
import { ContextLibros } from "../contextos/contextos.js";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ListadoLibros = () => {
  const { libros } = useContext(ContextLibros);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Descripcion</TableCell>
            <TableCell align="right">Fecha de ingreso</TableCell>
            <TableCell align="right">Genero</TableCell>
            <TableCell align="right">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {libros.map((libro) => (
            <Libro key={libro.id} libro={libro}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListadoLibros;
