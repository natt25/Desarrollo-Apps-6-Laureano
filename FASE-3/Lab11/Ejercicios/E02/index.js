const express = require('express');  
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());  // leer JSON

// Clave secreta para firmar los tokens
const JWT_SECRET = 'mi_clave_secreta';

// Usuario ejemplo (no hay db)
const fakeUser = {
    id: 1,
    username: 'natty',
    password: '123456',
    name: 'Natty Laureano'
};

// verificar JWT en rutas protegidas
function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']; // Lee cabecera Authorization

    if (!authHeader) {
        return res.status(401).json({ message: 'Token no proporcionado' });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        return res.status(401).json({ message: 'Formato de token inválido' });
    }

    const token = parts[1];

    // Verifica firma y expiración del token
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(401).json({ message: 'El token ha expirado' });
            }
            return res.status(401).json({ message: 'Token inválido' });
        }

        req.user = decoded;
        next();  
    });
}


// 1) ENDPOINT PÚBLICO: LOGIN (genera el JWT)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username !== fakeUser.username || password !== fakeUser.password) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const payload = {
        id: fakeUser.id,
        username: fakeUser.username,
        name: fakeUser.name
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '5m' });

    res.json({
        message: 'Login exitoso',
        token: token
    });
});


// 2) ENDPOINT PROTEGIDO 1: PERFIL DEL USUARIO
app.get('/api/profile', verifyToken, (req, res) => {
    res.json({
        message: 'Perfil del usuario autenticado',
        user: req.user
    });
});


// 3) ENDPOINT PROTEGIDO 2: LISTA DE NOTIFICACIONES
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
