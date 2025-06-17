import React, { useContext } from "react";
import Biblioteca from "../Biblioteca/Biblioteca.jsx";
import { ContextBiblioteca } from "../contextos/contextos.js";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListadoBiblioteca = () => {
  const { bibliotecas } = useContext(ContextBiblioteca);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Dirección</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bibliotecas.map((biblioteca) => (
            <Biblioteca key={biblioteca.id} biblioteca={biblioteca} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListadoBiblioteca;
