// ./controllers/depositoController.js
const DepositoService = require('../services/depositoService');

class DepositoController {
    constructor(depositoService) {
        this.depositoService = depositoService;
    }

    async create(req, res) {
        try {
            const deposito = await this.depositoService.create(req.body.nome, req.body.situacao);
            res.status(201).json(deposito);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const deposito = await this.depositoService.update(req.params.id, req.body.nome, req.body.situacao);
            res.status(200).json(deposito);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const depositos = await this.depositoService.findAll();
            res.status(200).json(depositos);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const deposito = await this.depositoService.findById(req.params.id);
            res.status(200).json(deposito);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getPosicaoByDeposito(req, res) {
        try {
            const posicao = await this.depositoService.getPosicaoByDeposito(req.params.depositoId);
            res.status(200).json(posicao);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getPosicaoById(req, res) {
        try {
            const posicao = await this.depositoService.getPosicaoById(req.params.posicaoId);
            res.status(200).json(posicao);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = DepositoController;

