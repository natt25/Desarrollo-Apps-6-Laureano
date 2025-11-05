// Importar el módulo http
var http = require('http');

// Crear servidor
var servidor = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.write('¡Hola desde mi primer servidor Node.js personalizado!');
    res.end();
});

// Levantar servidor en el puerto 4000
servidor.listen(4000, function () {
    console.log('Servidor ejecutándose en http://localhost:4000');
});
