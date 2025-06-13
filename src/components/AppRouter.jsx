import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LibrosContainer from "./LibrosContainer/LibrosContainer.jsx";
import BibliotecaContainer from "./BibliotecaContainer/BibliotecaContainer.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LibrosContainer />}></Route>
      <Route path="/libros" element={<LibrosContainer />}></Route>
      <Route path="/biblioteca" element={<BibliotecaContainer />}></Route>
    </Routes>
  );
};

export default AppRouter;
