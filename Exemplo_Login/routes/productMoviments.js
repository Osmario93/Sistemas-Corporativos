const express = require('express');
const router = express.Router();

const db = require('../models');
const ProductMovimentService = require('../services/productMovimentService');
const productMovimentService = new ProductMovimentService();

const ProductMovimentController = require('../controllers/productMovimentController');
const productMovimentController = new ProductMovimentController(productMovimentService);
const auth = require('../middleware/auth');

// Rota para verificar se o módulo está rodando
router.get('/', function(req, res, next) {
  res.send('módulo de produtos está rodando.');
});

// Rota para criar um novo produto
router.post('/novoProdutoMovimento', auth.verifyToken, async (req, res, next) => {
  try {
    await productMovimentController.create(req, res);
  } catch (error) {
    next(error); // Encaminha o erro para o middleware de tratamento de erros
  }
});

// Rota para localizar todos os produtos
router.get('/localizaTodosProdutosMovimentos', auth.verifyToken, async (req, res, next) => {
  try {
    await productMovimentController.findAll(req, res);
  } catch (error) {
    next(error); // Encaminha o erro para o middleware de tratamento de erros
  }
});

// Rota para localizar produto por ID
router.get('/localizaProdutoMovimentoPorId/:id', auth.verifyToken, async (req, res, next) => {
  try {
    await productMovimentController.findById(req, res);
  } catch (error) {
    next(error); // Encaminha o erro para o middleware de tratamento de erros
  }
});

// Rota para atualizar um produto
router.put('/atualizaMovimentoProduto/:id', auth.verifyToken, async (req, res, next) => {
  try {
    await productMovimentController.update(req, res);
  } catch (error) {
    next(error); // Encaminha o erro para o middleware de tratamento de erros
  }
});

// Rota para deletar um produto
router.delete('/deletaMovimentoProduto/:id', auth.verifyToken, async (req, res, next) => {
  try {
    await productMovimentController.delete(req, res);
  } catch (error) {
    next(error); // Encaminha o erro para o middleware de tratamento de erros
  }
});

module.exports = router;