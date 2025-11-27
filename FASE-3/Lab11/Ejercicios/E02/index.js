const express = require('express');  // Framework para crear el servidor
const jwt = require('jsonwebtoken');  // Librería para manejar JWT

const app = express();
app.use(express.json());  // Permite leer JSON en el cuerpo de la petición

// Clave secreta para firmar los tokens (en un proyecto real iría en variables de entorno)
const JWT_SECRET = 'mi_clave_super_secreta';

// Usuario "fake" para el ejemplo (no hay base de datos)
const fakeUser = {
    id: 1,
    username: 'natty',
    password: '123456',  // Solo para demo
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
            // Si el token ya expiró
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'El token ha expirado' });
            }
            // Cualquier otro error de validación
            return res.status(401).json({ message: 'Token inválido' });
        }

        // Guardamos los datos del token en la request para usarlos en la ruta
        req.user = decoded;
        next();  // Continúa a la ruta protegida
    });
}


// 1) ENDPOINT PÚBLICO: LOGIN (genera el JWT)
// POST /login

app.post('/login', (req, res) => {
    const { username, password } = req.body; // Datos enviados por el cliente

    // Validación sencilla contra el usuario "fake"
    if (username !== fakeUser.username || password !== fakeUser.password) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Payload que irá dentro del token
    const payload = {
        id: fakeUser.id,
        username: fakeUser.username,
        name: fakeUser.name
    };

    // Crea el token con expiración (por ejemplo, 1 minuto)
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1m' }); // 1m = 1 minuto

    res.json({
        message: 'Login exitoso',
        token: token
    });
});


// 2) ENDPOINT PROTEGIDO: PERFIL DEL USUARIO
// GET /api/profile

app.get('/api/profile', verifyToken, (req, res) => {
    // Aquí usamos los datos que venían en el token
    res.json({
        message: 'Perfil del usuario autenticado',
        user: req.user
    });
});


// 3) OTRO ENDPOINT PROTEGIDO: LISTA DE NOTIFICACIONES
// GET /api/notifications

app.get('/api/notifications', verifyToken, (req, res) => {
    // Simulamos notificaciones relacionadas al usuario autenticado
    const notifications = [
        { id: 1, text: `Hola ${req.user.name}, recuerda tu presentación.` },
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
