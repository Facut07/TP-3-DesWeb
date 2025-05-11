# Aplicación de Productos (Arquitectura por capas)

Esta app permite agregar y listar productos desde la consola usando JavaScript y Node.js. El código está dividido en tres capas:

##  Capas del proyecto

1. **Capa de presentación (`app.js`)**
   - Muestra mensajes al usuario y recibe interacciones (consola).

2. **Capa de lógica de negocio (`logic.js`)**
   - Valida datos, estructura los productos, y coordina el flujo de información.

3. **Capa de acceso a datos (`data.js`)**
   - Almacena productos en memoria y permite recuperarlos.

---

##  Ventajas respecto a la versión monolítica

- **Mejor organización:** Cada archivo tiene una única responsabilidad.
- **Fácil mantenimiento:** Podés modificar la lógica o el almacenamiento sin romper el resto.
- **Escalabilidad:** Permite migrar la base de datos o mejorar la presentación sin tocar todo el sistema.
- **Mayor claridad:** Es más fácil entender el flujo de datos y depurar errores.

---

##  Cómo ejecutarlo

1. Asegurate de tener [Node.js](https://nodejs.org) instalado.
2. Cloná el proyecto o copiá los archivos.
3. Ejecutá en consola:

```bash
node app.js
