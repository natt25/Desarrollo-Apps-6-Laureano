const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',   // <--- AQUÍ pon la contraseña real de tu root
    database: 'biblioteca'
});

con.connect((err) => {
    if (err) {
        console.error('Error al conectar a la BD:', err);
        throw err;
    }
    console.log('Conectado exitosamente a la BD');
});

module.exports = con;
