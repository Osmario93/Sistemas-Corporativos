// ./routes/moviment.js

const express = require('express');
const router = express.Router();
const MovimentController = require('../controllers/movimentController');
const auth = require('../middleware/auth');

// Rotas para Moviment
router.post('/novoMovimento', auth.verifyToken, (req, res) => {
    MovimentController.create(req, res);
});

router.get('/localizarmovimentos', auth.verifyToken, (req, res) => {
    MovimentController.findAll(req, res);
});

router.get('/buscarMovimentoPorId', auth.verifyToken, (req, res) => {
    MovimentController.findById(req, res);
});

// Outras rotas conforme necessidade

module.exports = router;
