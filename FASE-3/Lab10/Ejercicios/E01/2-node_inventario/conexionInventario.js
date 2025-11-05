// Importar paquete mysql
var mysql = require('mysql');

// Crear conexión
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',     // cambia según tu instalación
    database: 'inventariodb',
    port: '3306'
});

// Conectar
conexion.connect(function (err) {
    if (err) {
        console.log('Error de conexión: ' + err.stack);
        return;
    }
    console.log('Conectado con ID: ' + conexion.threadId);
});

// Consultar datos
conexion.query('SELECT * FROM productos', function (error, resultados) {
    if (error) throw error;

    console.log('=== INVENTARIO DISPONIBLE ===');
    resultados.forEach(item => {
        console.log(`ID: ${item.id} | ${item.nombre} | Cantidad: ${item.cantidad} | Precio: S/ ${item.precio}`);
    });
});

// Cerrar conexión
conexion.end();
