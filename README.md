Importante!

Este proyecto es una aplicación full-stack de una lista de tareas que permite crear, obtener, actualizar y eliminar tareas mediante un frontend en React + Vite, que consume una API REST construida con Node.js, Express y MongoDB (Mongoose). El frontend se comunica con el backend a través de funciones que usan fetch (POST, GET, PUT y DELETE) y una variable de entorno VITE_API_URL definida en un archivo .env. Tiene estilos simples en CSS.

Para iniciar el proyecto se necesitan las dependencias:

- en el backend: express, mongoose, cors, dotenv y nodemon.

- en el frontend: react, react-dom y Vite.

- para ejecutarlo:
- npm install en cada carpeta (backend y src -frontend-)
- npm start o nodemon en el backend
- npm run dev en el frontend.

Para bajarlo desde GitHub, sólo tenés que clonar el repositorio con git clone + URL del depo, entrar a las carpetas /backend y /src (frontend), instalar las dependencias mencionadas arriba y ejecutar ambos servidores para tener la aplicación funcionando localmente.

Para probar esta API en Postman, simplemente abrís una nueva request, elegís el método correspondiente (GET para obtener tareas, POST para crear, PUT para actualizar y DELETE para borrar) y escribís la URL del backend, en mi caso http://localhost:5000/todos o http://localhost:5000/todos/[id de la tarea] si usás POST o PUT, vas a Body -> raw -> JSON y enviás un dato como { "title": "Tarea" }, luego clickeás Send y verificás el código de respuesta y el JSON que devuelve el backend para confirmar que todo funciona correctamente.

Espero sea de su agrado y quedo a las órdenes por cualquier consulta y/o críticas/comentarios que puedan ayudarme a mejorarlo!

Gracias por su atención--

Alexandra O.
