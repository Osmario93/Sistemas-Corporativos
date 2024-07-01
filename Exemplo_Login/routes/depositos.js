// routes/depositos.js
const express = require('express');
const router = express.Router();

const DepositoService = require('../services/depositoService'); // Importe como um construtor, não instanciado

const DepositoController = require('../controllers/depositoController');
const depositoController = new DepositoController(new DepositoService());

const auth = require('../middleware/auth');

router.get('/', function(req, res, next) {
  res.send('módulo de depósitos está rodando.');
});

// Rota para criar um novo depósito
router.post('/novoDeposito', auth.verifyToken, function(req, res, next) {
  depositoController.create(req, res);
});

// Rota para localizar todos os depósitos
router.get('/localizaTodosDepositos', auth.verifyToken, function(req, res, next) {
  depositoController.findAll(req, res);
});

// Rota para localizar depósito por ID
router.get('/localizaDepositoPorId/:id', auth.verifyToken, function(req, res, next) {
  depositoController.findById(req, res);
});

// Rota para atualizar um depósito
router.put('/atualizaDeposito/:id', auth.verifyToken, function(req, res, next) {
  depositoController.update(req, res);
});

// Rota para deletar um depósito
router.delete('/deletaDeposito/:id', auth.verifyToken, function(req, res, next) {
  depositoController.delete(req, res);
});

module.exports = router;

