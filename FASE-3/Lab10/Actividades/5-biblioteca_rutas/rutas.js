// Importando Express
var express = require('express');

// Creando el enrutador
var router = express.Router();

// Rutas principales
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
    res.send('Mostrando lista de usuarios registrados');
});

router.get('/usuarios/nuevo', function (req, res) {
    res.send('Formulario para registrar un nuevo usuario');
});

// Exportar el módulo para usarlo desde otro archivo
module.exports = router;
