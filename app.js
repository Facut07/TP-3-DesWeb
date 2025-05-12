// app.js: Capa de presentación

const { agregarProducto, listarProductos } = require('./logic');

console.log(agregarProducto("Auriculares", 15000));
console.log(agregarProducto("Mouse", 4500));
console.log("\nListado de productos:");
console.log(listarProductos());
