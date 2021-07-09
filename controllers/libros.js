const {request, response} = require('express');
const mysql = require('../database/database');

//Consulta de libros
const bookGet = (req=request, res=response)=>{

    mysql.query('SELECT * FROM libros', (err, data)=>{
        if (err) {
            console.log(err)
        }
        res.json(data)
    })
}
//Consulta de libros por ID
const booksGet = (req=request, res=response)=>{

    const {id}=req.params

    mysql.query(`SELECT * FROM libros WHERE id = ${id}`, (err, data)=>{
        if (err) {
            console.log(err)
        }
        res.json(data)
    })
}
//Registro de libros
const bookPost = (req=request, res=response) =>{

    const {nombre_libro} = req.body

    mysql.query(`INSERT INTO libros(nombre_libro) VALUES("${nombre_libro}")`, (err, data)=>{
        if (err) {
            console.log(err)
        }
        res.json("El libro ha sido creado correctamente")
    })
}
//Actualizacion de libro por ID
const bookPut = (req=request, res=response) =>{

    const {id} = req.params;
    const {body} = req;

    mysql.query(`UPDATE libros SET ? WHERE id =${id}`, body, (err)=>{
        if (err) {
            console.log(err)
        }
        res.json("El libro ha sido actualizado correctamente")
    })
}
//Eliminacion de libro por ID
const bookDelete = (req=request, res=response) =>{

    const {id} = req.params;

    mysql.query(`DELETE FROM libros WHERE id = ${id}`, (err, data)=>{
        if (err) {
            console.log(err)
        }
        res.json("El libro ha sido eliminado correctamente")
    })
}

module.exports={
    bookGet,
    booksGet,
    bookPost,
    bookPut,
    bookDelete
}