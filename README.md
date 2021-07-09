# API BIBLIOTECA

## Requisitos para la ejecucion de la API:

- En el folder ``DB_BIBLIOTECA`` se encuentra el script de la base de datos en MYSQL. La cual es necesaria para el funcionamiento de la API.

- Para iniciar el servidor, en la ruta `models/server.js` se ecuentra la constate `port` para ser definida segun el puerto disponible.

- En la ruta `database/database.js` se encuentra la inicializacion de la base de datos, se deben de configurar las propiedades de `host`, `user`, `password`, `database` segun se requiera para su correcta inicializacion.

### Recrear dependencias

Para recrear las dependencias es necesario ejecutar el comando:
```
npm install
```
Una vez se encuentren las dependencias instaladas, para iniciar el servidor se debe dejecutar el siguiente comando:
```
nodemon index.js
```
Finalmente se encuentren todos los requisitos inciados, las rutas para evaluar la API son:

### Usuarios

- Consulta de usuarios: http://localhost:8080/api/usuarios
- Consulta de usuarios por ID: http://localhost:8080/api/usuarios/{id}
- Registro de usuarios: http://localhost:8080/api/usuarios
    - {"nombre_usuario": "", telefono: ""}
- Actualizacion de usuarios: http://localhost:8080/api/usuarios/{id}
    - {"nombre_usuario": "", telefono: ""}
- Eliminacion de usuarios: http://localhost:8080/api/usuarios/{id}

### Libros

- Consulta de libros: http://localhost:8080/api/libros
- Consulta de libros por ID: http://localhost:8080/api/libros/{id}
- Registro de libros: http://localhost:8080/api/libros
    - {"nombre_libro": ""}
- Actualizacion de libros: http://localhost:8080/api/libros/{id}
    - {"nombre_libro": ""}
- Eliminacion de libros: http://localhost:8080/api/libros/{id}

### Prestamos

- Consulta de prestamos: http://localhost:8080/api/prestamos
- Consulta de prestamos por ID: http://localhost:8080/api/prestamos/{id}
- Registro de prestamos: http://localhost:8080/api/prestamos
    - {"id_usuario": "", "id_libro: ""}
- Actualizacion de prestamos: http://localhost:8080/api/prestamos/{id}
    - {"id_usuario": "", "id_libro: ""}
- Eliminacion de prestamos: http://localhost:8080/api/prestamos/{id}
