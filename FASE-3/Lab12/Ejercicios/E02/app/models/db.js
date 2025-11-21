var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/node-crud')
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.log("Error al conectar a MongoDB:", err));
