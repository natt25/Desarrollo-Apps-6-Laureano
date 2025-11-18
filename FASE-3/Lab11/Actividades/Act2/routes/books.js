const express = require('express');
const appRouter = express.Router();

const con = require('../config/connection');
const bodyParser = require('body-parser');

appRouter.use(bodyParser.urlencoded({ extended: true }));
appRouter.use(bodyParser.json());

// OJO: por ahora SIN CALL, solo SELECT
const sql_all = 'SELECT * FROM books';

appRouter.get('/books', (req, res) => {
    console.log('>>> Entró a GET /api/books');

    con.query(sql_all, (error, results) => {
        if (error) {
            console.error('Error en SELECT * FROM books:', error);
            return res.status(500).json({ message: 'Error al listar libros' });
        }

        console.log('RESULTS desde MySQL:', results);
        res.json(results);   // enviamos tal cual
    });
});

module.exports = appRouter;
