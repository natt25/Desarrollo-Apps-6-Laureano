const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Importar router de libros
const bookRouter = require('./routes/books');

// Montar las rutas bajo /api
app.use('/api', bookRouter);

// Inicializar servidor
app.listen(3000, () => {
    console.log('Servidor en ejecución en http://localhost:3000');
});
