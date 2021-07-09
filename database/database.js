const mysql = require('mysql');


const connectionDB = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'biblioteca'
});


connectionDB.connect((err)=>{
    if(err){
        console.log('Error al iniciar la base de datos')
    }

    console.log('Base de datos conectada')
})

module.exports = connectionDB;