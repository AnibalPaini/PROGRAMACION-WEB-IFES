export function librosReducer(libros, action) {
  switch (action.type) {
    case "agregar":
      return [...libros, action.libro];
    case "eliminar":
      return libros.filter(
        (libro) => libro.id !== action.id
      );
    default:
      throw new Error("Esta accion no esta definida!");
  }
}
export function bibliotecaReducer(bibliotecas, action) {
  switch (action.type) {
    case "agregar":
      return [...bibliotecas, action.biblioteca];
    case "eliminar":
      return bibliotecas.filter(
        (biblioteca) => biblioteca.id !== action.id
      );
    default:
      throw new Error("Esta accion no esta definida!");
  }
}