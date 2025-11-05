// Solicitando el paquete de MySQL
var mysql = require('mysql');

// Configurando parámetros de conexión (ajusta según tu instalación)
var conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',        // cambia si usas otro puerto
    database: 'ventasdb',
    user: 'root',
    password: ''         // 'root' o la clave que uses; si no tienes, déjalo vacío
});

// Realizando la conexión o verificando si sucedió un error
conexion.connect(function(err) {
    if (err) {
        console.log('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conectado a MySQL con ID de hilo: ' + conexion.threadId);
});

// Realizando una consulta para mostrar los productos
conexion.query('SELECT id, nombre, categoria, precio FROM productos', function(error, results) {
    if (error) {
        throw error;
    }

    console.log('=== LISTA DE PRODUCTOS ===');
    results.forEach(function(elemento) {
        console.log(
            'ID: ' + elemento.id +
            ' | Nombre: ' + elemento.nombre +
            ' | Categoría: ' + elemento.categoria +
            ' | Precio: S/ ' + elemento.precio
        );
    });
});

// Cerrando la conexión
conexion.end();
