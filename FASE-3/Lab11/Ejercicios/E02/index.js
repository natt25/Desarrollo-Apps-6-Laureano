const express = require('express');  // Framework para crear el servidor
const jwt = require('jsonwebtoken');  // Librería para manejar JWT

const app = express();
app.use(express.json());  // Permite leer JSON en el cuerpo de la petición

// Clave secreta para firmar los tokens
const JWT_SECRET = 'mi_clave_secreta';

// Usuario para el ejemplo (no hay db)
const fakeUser = {
    id: 1,
    username: 'natty',
    password: '123456',
    name: 'Natty Laureano'
};


// Middleware para verificar el JWT en rutas protegidas
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']; // Lee cabecera Authorization

    if (!authHeader) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    // Se espera el formato: "Bearer <token>"
    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Formato de token inválido' });
    }

    const token = parts[1];

    // Verifica firma y expiración del token
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            // Si el token ya expiro
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'El token ha expirado' });
            }
            // otro error de validacion
            return res.status(401).json({ message: 'Token inválido' });
        }

        // Guarda datos del token en la request para usarlos en la ruta
        req.user = decoded;
        next();  // Continua a la ruta protegida
    });
}


// 1) ENDPOINT PÚBLICO: LOGIN (genera el JWT)
// POST /login
app.post('/login', (req, res) => {
    const { username, password } = req.body; // Datos enviados por el cliente

    // Validación contra el usuario fake
    if (username !== fakeUser.username || password !== fakeUser.password) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Payload que irá dentro del token
    const payload = {
        id: fakeUser.id,
        username: fakeUser.username,
        name: fakeUser.name
    };

    // Crea el token con expiración
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '5m' });

    res.json({
        message: 'Login exitoso',
        token: token
    });
});


// 2) ENDPOINT PROTEGIDO 1: PERFIL DEL USUARIO
// GET /api/profile
app.get('/api/profile', verifyToken, (req, res) => {
    res.json({
        message: 'Perfil del usuario autenticado',
        user: req.user
    });
});


// 3) ENDPOINT PROTEGIDO 2: LISTA DE NOTIFICACIONES
// GET /api/notifications
app.get('/api/notifications', verifyToken, (req, res) => {
    const notifications = [
        { id: 1, text: `Hola ${req.user.name}, recuerda tu tarea.` },
        { id: 2, text: 'Tienes una nueva tarea asignada.' }
    ];

    res.json({
        message: 'Notificaciones del usuario',
        notifications: notifications
    });
});

// Levantar servidor
app.listen(3000, () => {
    console.log('Servidor con JWT escuchando en http://localhost:3000');
});
