const {request, response} = require('express');
const mysql = require('../database/database');

//Consulta de prestamos
const lendGet = (req=request, res=response)=>{

    mysql.query('SELECT id_prestamos, nombre_usuario, nombre_libro FROM prestamos INNER JOIN usuarios ON prestamos.id_usuario = usuarios.id INNER JOIN libros ON prestamos.id_libro = libros.id', (err, data)=>{
        if (err) {
            console.log(err)
        }
        res.json(data)
    })
}
//Consulta de prestamos por ID
const lendsGet = (req=request, res=response)=>{

    const {id}=req.params

    mysql.query(`SELECT id_prestamos, nombre_usuario, nombre_libro FROM prestamos INNER JOIN usuarios ON prestamos.id_usuario = usuarios.id INNER JOIN libros ON prestamos.id_libro = libros.id WHERE id_prestamos = ${id}`, (err, data)=>{
        if (err) {
            console.log(err)
        }
        res.json(data)
    })
}
//Registro de prestamos
const lendPost = (req=request, res=response) =>{

    const {id_usuario, id_libro} = req.body

    mysql.query(`SELECT id_libro FROM prestamos WHERE id_libro = ${id_libro}`, (err, data)=>{
        if(data.length >= 1){
            res.json("Lo sentimos, el libro ya se encuentra en prestamo")
        }else{
            mysql.query(`INSERT INTO prestamos(id_usuario, id_libro) VALUES("${id_usuario}","${id_libro}")`, (err, data)=>{
                if (err) {
                    console.log(err)
                }
                res.json('Prestamo de libro ha sido exitoso')
            })
        }
    })
}
//Actualizacion de prestamos
const lendPut = (req=request, res=response) =>{

    const {id} = req.params;
    const {id_usuario, id_libro} = req.body;

    mysql.query(`UPDATE prestamos SET id_usuario = "${id_usuario}", id_libro="${id_libro}" WHERE id_prestamos =${id}`, (err, data)=>{
        if (err) {
            console.log(err)
        }
        res.json("El prestamo ha sido actualizado correctamente")
    })
}
//Eliminacion de prestamos
const lendDelete = (req=request, res=response) =>{

    const {id} = req.params;

    mysql.query(`DELETE FROM prestamos WHERE id_prestamos = ${id}`, (err, data)=>{
        if (err) {
            console.log(err)
        }
        res.json("El prestamo ha sido eliminado correctamente")
    })
}

module.exports = {
    lendGet,
    lendsGet,
    lendPost,
    lendPut,
    lendDelete
}