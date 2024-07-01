const express = require('express');
const router = express.Router();

const db = require('../models');
const ProductService = require('../services/productService');
const productService = new ProductService(db.Product);

const ProductController = require('../controllers/productController');
const productController = new ProductController(productService);
const auth = require('../middleware/auth');

router.get('/', function(req, res, next) {
  res.send('módulo de produtos está rodando.');
});

// Rota para criar um novo produto
router.post('/novoProduto', auth.verifyToken, function(req, res, next) {
  productController.create(req, res);
});

// Rota para localizar todos os produtos
router.get('/localizaTodosProdutos', auth.verifyToken, function(req, res, next) {
  productController.findAll(req, res);
});

// Rota para localizar produto por ID
router.get('/localizaProdutoPorId/:id', auth.verifyToken, function(req, res, next) {
  productController.findById(req, res);
});

// Rota para atualizar um produto
router.put('/atualizaProduto/:id', auth.verifyToken, function(req, res, next) {
  productController.update(req, res);
});

// Rota para deletar um produto
router.delete('/deletaProduto/:id', auth.verifyToken, function(req, res, next) {
  productController.delete(req, res);
});

module.exports = router;



