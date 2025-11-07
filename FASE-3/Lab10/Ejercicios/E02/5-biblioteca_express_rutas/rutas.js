/// ARCHIVO: rutas.js
/// Archivo especializado de manejo de rutas

var express = require('express');
var router = express.Router();

// Ruta principal
router.get('/', function (req, res) {
    res.send('📚 Bienvenido al Sistema de Biblioteca');
});

// Rutas para libros
router.get('/libros', function (req, res) {
    res.send('Mostrando el catálogo de libros');
});

router.get('/libros/:id', function (req, res) {
    res.send('Detalles del libro con ID: ' + req.params.id);
});

// Rutas para usuarios
router.get('/usuarios', function (req, res) {
    res.send('Mostrando la lista de usuarios de la biblioteca');
});

router.get('/usuarios/nuevo', function (req, res) {
    res.send('Formulario para registrar un nuevo usuario');
});

module.exports = router;
