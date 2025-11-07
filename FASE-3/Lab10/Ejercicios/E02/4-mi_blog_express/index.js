// importando paquete Express
var express = require('express');

// creando aplicación en Express
var app = express();

// Ruta principal
app.get('/', function (req, res) {
    res.send('Bienvenido a mi Blog 📝');
});

// Ruta de artículos
app.get('/articulos', function (req, res) {
    res.send('Aquí se mostraría la lista de artículos del blog');
});

// Ruta de acerca de
app.get('/about', function (req, res) {
    res.send('Acerca del autor del blog');
});

// El servidor de escucha que desplegará mi ruta HTTP
app.listen(3000, function () {
    console.log('La aplicación de blog está funcionando en el puerto 3000');
});
