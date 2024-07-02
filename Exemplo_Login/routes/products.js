// routes/depositos.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const productService = require('../services/productService');//classe
const ProductService = new productService(db.Product);//Construção do objeto

const productController = require('../controllers/productController');//classe
const ProductController = new productController(ProductService);//Construção do objeto
const auth = require('../middleware/auth');



router.get('/', function(req, res, next) {
  res.send('módulo de produtos está rodando.');
});

// Rota para criar um novo produto
router.post('/novoProduto', auth.verifyToken, function(req, res, next) {
  ProductController.create(req, res);
});

// Rota para localizar todos os produtos
router.get('/localizaTodosProdutos', auth.verifyToken, function(req, res, next) {
  ProductController.findAll(req, res);
});

// Rota para localizar produto por ID
router.get('/localizaProdutoPorId/:id', auth.verifyToken, function(req, res, next) {
  ProductController.findById(req, res);
});

// Rota para atualizar um produto
router.put('/atualizaProduto/:id', auth.verifyToken, function(req, res, next) {
  ProductController.update(req, res);
});

// Rota para deletar um produto
router.delete('/deletaProduto/:id', auth.verifyToken, function(req, res, next) {
  ProductController.delete(req, res);
});

module.exports = router;



