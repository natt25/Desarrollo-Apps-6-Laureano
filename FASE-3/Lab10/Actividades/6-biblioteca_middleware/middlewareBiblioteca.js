// Importando el paquete express
var express = require('express');

// Creando el objeto express
var app = express();

// =====================
// 1. Middleware global
// =====================
// Este middleware se ejecuta ANTES de llegar a cualquier ruta.
// Sirve para registrar información de cada petición.
const loggerMiddleware = function (req, res, next) {
    console.log('--------------------------------------');
    console.log('Nueva petición recibida');
    console.log('Método: ' + req.method);
    console.log('Ruta: ' + req.url);
    console.log('Fecha y hora: ' + new Date().toLocaleString());
    console.log('--------------------------------------');

    // Muy importante: llamar a next() para que continúe el flujo
    next();
};

// Invocando el middleware global
app.use(loggerMiddleware);

// ====================================
// 2. Middleware para ruta protegida
// ====================================
// Middleware que verifica un "token" en la query (?token=123)
// Si no tiene token correcto, NO deja pasar a la ruta protegida.
const authMiddleware = function (req, res, next) {
    const token = req.query.token;

    if (token === 'biblioteca123') {
        console.log('Acceso autorizado a la zona protegida');
        next(); // pasa a la ruta
    } else {
        console.log('Acceso denegado: token inválido o ausente');
        res.status(401).send('No tienes permiso para acceder a esta sección de la biblioteca');
    }
};

// =====================
// 3. Rutas de ejemplo
// =====================

// Ruta principal (pública)
app.get('/', function (req, res) {
    res.send('📚 Bienvenido a la Biblioteca (sección pública)');
});

// Ruta de catálogo (pública)
app.get('/catalogo', function (req, res) {
    res.send('Aquí se mostraría el catálogo público de libros');
});

// Ruta protegida (usa el authMiddleware)
app.get('/admin', authMiddleware, function (req, res) {
    res.send('Zona ADMIN de la biblioteca: aquí solo entran usuarios autorizados ✅');
});

// =====================
// 4. Levantando servidor
// =====================
app.listen(3000, function () {
    console.log('Servidor de Biblioteca con middleware en http://localhost:3000');
});
