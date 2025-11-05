// Importando Express
var express = require('express');

// Creando la aplicación
var app = express();

// Importando el archivo de rutas
var rutasBiblioteca = require('./rutas');

// Usando las rutas en la raíz del sitio
app.use('/', rutasBiblioteca);

// Levantando el servidor
app.listen(3000, function () {
    console.log('🚀 Servidor ejecutándose en http://localhost:3000');
});
