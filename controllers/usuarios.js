const {request, response} = require('express');
const mysql = require('../database/database');

//Consultar usuarios
const userGet = (req=request, res=response)=>{

    mysql.query('SELECT * FROM usuarios', (err, data)=>{
        if (err) {
            console.log(err)
        }
        res.json(data)
    })
}
//Consultar usuarios por ID
const usersGet = (req=request, res=response)=>{
    
    const {id}=req.params

    mysql.query(`SELECT * FROM usuarios WHERE id = ${id}`, (err, data)=>{
        if (err) {
            console.log(err)
        }
        res.json(data)
    })
}
//Registrar usuarios
const userPost = (req=request, res=response) =>{

    const {nombre_usuario, telefono} = req.body

    mysql.query(`INSERT INTO usuarios(nombre_usuario, telefono) VALUES("${nombre_usuario}","${telefono}")`, (err)=>{
        if (err) {
            console.log(err)
        }
        res.json("El usuario ha sido creado correctamente")
    })
}
//Actualizar usuarios
const userPut = (req=request, res=response) =>{

    const {id} = req.params;
    const {body} = req;

    mysql.query(`UPDATE usuarios SET ? WHERE id =${id}`, body, (err, data)=>{
        if (err) {
            console.log(err)
        }
        res.json("El usuario ha sido actualizado correctamente")
    })
}
//Eliminar usuarios
const userDelete = (req=request, res=response) =>{

    const {id} = req.params;

    mysql.query(`DELETE FROM usuarios WHERE id = ${id}`, (err, data)=>{
        if (err) {
            console.log(err)
        }
        res.json("El usuario ha sido eliminado correctamente")
    })
}

module.exports = {
    userGet,
    usersGet,
    userPost,
    userPut,
    userDelete
}