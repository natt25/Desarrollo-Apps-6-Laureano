// Importar paquete mysql
var mysql = require('mysql');

// Crear conexión
var conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',     
    database: 'pasteleriadb',
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

    console.log('=== INVENTARIO DISPONIBLE DE LA PASTELERÍA ===');
    resultados.forEach(item => {
        console.log(
            `ID: ${item.id} | ${item.nombre} | Categoría: ${item.categoria} | Precio: S/ ${item.precio} | Stock: ${item.stock}`
        );
    });
});

// Cerrar conexión
conexion.end();
