// Importar los paquetes http y fs
var http = require('http');
var fs = require('fs');

// Cargar la plantilla HTML
var html = fs.readFileSync('./index.html');

// Crear servidor
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(html);
    res.end();
}).listen(3000);

console.log('Servidor HTML ejecutándose en http://localhost:3000');
