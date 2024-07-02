// routes/depositos.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const depositoService = require('../services/depositoService');//classe
const DepositoService = new depositoService(db.Deposito);//Construção do objeto

const depositoController = require('../controllers/depositoController');//classe
const DepositoController = new depositoController(DepositoService);//Construção do objeto
const auth = require('../middleware/auth');


router.get('/', function(req, res, next) {
  res.send('módulo de depósitos está rodando.');
});

// Rota para criar um novo depósito
router.post('/novoDeposito', auth.verifyToken, function(req, res, next) {
  DepositoController.create(req, res);
});

// Rota para localizar todos os depósitos
router.get('/localizaTodosDepositos', auth.verifyToken, function(req, res, next) {
  DepositoController.findAll(req, res);
});

// Rota para localizar depósito por ID
router.get('/localizaDepositoPorId/:id', auth.verifyToken, function(req, res, next) {
  DepositoController.findById(req, res);
});

// Rota para atualizar um depósito
router.put('/atualizaDeposito/:id', auth.verifyToken, function(req, res, next) {
  DepositoController.update(req, res);
});

// Rota para deletar um depósito
router.delete('/deletaDeposito/:id', auth.verifyToken, function(req, res, next) {
  DepositoController.delete(req, res);
});

module.exports = router;

