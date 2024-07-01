var express = require('express');
var router = express.Router();

const db = require('../models');
const ProductMovementService = require('../services/productMovementService');
const productMovementService = new ProductMovementService(db.ProductMovement);
const ProductMovementController = require('../controllers/productMovementController');
const productMovementController = new ProductMovementController(productMovementService);
const auth = require('../middleware/auth');

// Rota para criar um novo movimento de produto
router.post('/CriarMovimento', auth.verifyToken, (req, res) => productMovementController.create(req, res));

// Rota para obter todos os movimentos de produto
router.get('/', auth.verifyToken, (req, res) => productMovementController.findAll(req, res));

// Rota para obter um movimento de produto por ID
router.get('/:id', auth.verifyToken, (req, res) => productMovementController.findById(req, res));

// Rota para atualizar um movimento de produto
router.put('/:id', auth.verifyToken, (req, res) => productMovementController.update(req, res));

// Rota para deletar um movimento de produto
router.delete('/:id', auth.verifyToken, (req, res) => productMovementController.delete(req, res));

module.exports = router;
