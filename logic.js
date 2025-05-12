// logic.js: Capa de lógica de negocio

const { guardarProducto, obtenerProductos } = require('./data');

function agregarProducto(nombre, precio) {
  if (!nombre || isNaN(precio)) {
    return "Datos inválidos.";
  }

  const producto = {
    id: obtenerProductos().length + 1,
    nombre,
    precio: parseFloat(precio),
  };

  guardarProducto(producto);
  return `Producto "${nombre}" agregado.`;
}

function listarProductos() {
  const productos = obtenerProductos();
  if (productos.length === 0) return "No hay productos.";

  return productos.map(p =>
    `ID: ${p.id} | Nombre: ${p.nombre} | Precio: $${p.precio.toFixed(2)}`
  ).join('\n');
}

module.exports = { agregarProducto, listarProductos };
