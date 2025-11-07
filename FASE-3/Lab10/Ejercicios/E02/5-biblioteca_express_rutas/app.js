// ARCHIVO: app.js
// Archivo principal que usa el módulo de rutas

var express = require('express');
var app = express();

// invocando archivo que maneja rutas
var rutasBiblioteca = require('./rutas');

// usar las rutas en la raíz
app.use('/', rutasBiblioteca);

// El servidor de escucha que desplegará mi ruta HTTP
app.listen(3000, function () {
    console.log('La aplicación de biblioteca está funcionando en el puerto 3000');
});
