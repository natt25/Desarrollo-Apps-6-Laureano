var express = require('express');
var app = express();
var mysql = require('mysql');
const bodyParser = require('body-parser');

var connection = mysql.createConnection({
    host : 'localhost',
    database :'barbershop',
    user : 'root',
    password : '123456',
});

connection.connect(function(err){
    if (err) throw err
    console.log('Se conecto a la BD');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

//CREATE SERVER
var server = app.listen(3000, "127.0.0.1", function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Servidor escuchando en http://${host}:${port}`);
});

//API que trea todos los books ///////////////ACT1
// app.get('/books',function(req,res){
//     connection.query('select * from books' , function(error,results){
//         if (error) throw error;
//         res.end(JSON.stringify(results))
//     });
// });

//API que traera los libros por ID /////////////////ACT2
app.get('/books/:id', function (req, res) {
    connection.query('select * from books where id = ?', [req.params.id], function (error, results) {
            if (error) throw error;
            res.end(JSON.stringify(results));
        });
});
