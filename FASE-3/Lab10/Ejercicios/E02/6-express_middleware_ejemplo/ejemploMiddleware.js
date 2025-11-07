// importando paquete express
var express = require('express');

// creando objeto express
var app = express();

// =========================
// Middleware global (logger)
// =========================
const loggerMiddleware = function (req, res, next) {
    console.log('--------------------------------');
    console.log('Nueva petición recibida');
    console.log('Método: ' + req.method);
    console.log('Ruta: ' + req.url);
    console.log('Hora: ' + new Date().toLocaleString());
    console.log('--------------------------------');
    next(); // continuar con la siguiente función
};

// invocando el middleware global
app.use(loggerMiddleware);

// ==============================
// Middleware de autenticación
// ==============================
const authMiddleware = function (req, res, next) {
    const token = req.query.token; // ej: ?token=admin123

    if (token === 'admin123') {
        console.log('Acceso permitido a la zona admin');
        next();
    } else {
        console.log('Acceso denegado a la zona admin');
        res.status(401).send('No tienes permisos para acceder a la zona admin');
    }
};

// =========================
// Rutas de la aplicación
// =========================

// Ruta pública
app.get('/', function (req, res) {
    res.send('🏠 Página pública de la aplicación');
});

// Ruta de información
app.get('/info', function (req, res) {
    res.send('ℹ️ Información general de la aplicación');
});

// Ruta protegida (usa el middleware de auth)
app.get('/admin', authMiddleware, function (req, res) {
    res.send('👑 Bienvenido a la zona ADMIN, acceso autorizado');
});

// levantando servidor
app.listen(3000, function () {
    console.log('Servidor con middleware en ejecución en el puerto 3000');
});
