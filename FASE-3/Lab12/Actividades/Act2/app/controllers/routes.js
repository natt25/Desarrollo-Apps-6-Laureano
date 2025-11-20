// Importando paquetes y archivos necesarios para trabajar rutas
var express = require('express');
var bodyParser = require('body-parser');
var Product = require('../models/products');
var router = express.Router();

// Configurando el Parser
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Middleware simple
router.use(function(req, res, next) {
  console.log("request");
  next();
});

// --- RUTAS ---

// POST y GET de products usando async/await (compatible con versiones nuevas de Mongoose)
router.route('/products')

  // CREATE
  .post(async function(req, res) {
    try {
      const product = new Product({
        name: req.body.name,
        amount: req.body.amount,
        description: req.body.description
      });

      await product.save();
      res.json({ message: "Producto registrado con éxito" });

    } catch (error) {
      res.status(500).send("Error en el servicio: " + error);
    }
  })

  // READ
  .get(async function(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).send("Error en el servicio: " + error);
    }
  });

module.exports = router;
