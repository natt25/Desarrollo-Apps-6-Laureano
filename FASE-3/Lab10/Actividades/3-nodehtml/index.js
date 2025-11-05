// Importar los paquetes http y fs
var http = require('http');
var fs = require('fs');

// Cargar la plantilla HTML desde el archivo index.html
var html = fs.readFileSync('./index.html');

// Crear servidor, ponerlo a la escucha y enviar el contenido de la plantilla
http.createServer(function (req, res) {
    // Cabecera para indicar que vamos a enviar HTML
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(html);
    res.end();
}).listen(3000);

// Mensaje en consola para saber que el servidor está activo
console.log('Servidor Node mostrando la página personal en el puerto 3000');
