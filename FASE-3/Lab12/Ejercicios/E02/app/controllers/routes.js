var express = require('express');
var bodyParser = require('body-parser');
var Product = require('../models/products');
var router = express.Router();

// Configuración
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Middleware
router.use(function(req, res, next) {
  console.log("request");
  next();
});

// ========================== POST & GET ==========================
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
      res.status(500).send("Error: " + error);
    }
  })

  // READ
  .get(async function(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).send("Error: " + error);
    }
  });


// ========================== PUT & DELETE ==========================
router.route('/products/:id')

  // UPDATE
  .put(async function(req, res) {
    try {
      const updated = await Product.findByIdAndUpdate(
        req.params.id,
        {
          name: req.body.name,
          amount: req.body.amount,
          description: req.body.description
        },
        { new: true }
      );

      if (!updated) return res.json({ message: "Producto no encontrado" });

      res.json({ message: "Producto actualizado", data: updated });

    } catch (error) {
      res.status(500).send("Error: " + error);
    }
  })

  // DELETE
  .delete(async function(req, res) {
    try {
      const deleted = await Product.findByIdAndDelete(req.params.id);

      if (!deleted) return res.json({ message: "Producto no encontrado" });

      res.json({ message: "Producto eliminado" });

    } catch (error) {
      res.status(500).send("Error: " + error);
    }
  });

module.exports = router;
