const express = require('express');
const routeUser = require('../routes/usuarios');
const routeBook = require('../routes/libros');
const routeLend = require('../routes/prestamos');

const port = '8080'

class Server{

    constructor(){
        this.app = express();
        this.port = port;

        this.paths={
            usuarios: '/api/usuarios',
            libros: '/api/libros',
            prestamos: '/api/prestamos'
        }

        this.middleware();
        this.routes();

    }

    middleware(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.usuarios, routeUser);
        this.app.use(this.paths.libros, routeBook);
        this.app.use(this.paths.prestamos, routeLend);
    }

    listen(){
        this.app.listen(port, ()=>{
            console.log(`Servidor iniciado en el puerto ${port}`)
        })
    }
}

module.exports = Server;
