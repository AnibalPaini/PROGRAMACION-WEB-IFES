import React from "react";
import AppRouter from "./components/AppRouter.jsx";
import {BrowserRouter, Link } from "react-router-dom";
import "./style.css"
const App = () => {
  return (
    <BrowserRouter>
      <header className="header">
        <Link to={"/libros"}>Libros</Link>
        <Link to={"/biblioteca"}>Biblioteca</Link>
      </header>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
};

export default App;
