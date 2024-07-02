// ./controllers/movimentController.js

class MovimentController {
    constructor(movimentService) {
        this.movimentService = movimentService;
    }

    async create(req, res) {
        try {
            const { nome, tipo } = req.body;
            const productMoviment = await this.movimentService.create(nome, tipo);
            res.status(201).json(moviment);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const moviments = await this.movimentService.findAll();
            res.status(200).json(moviments);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const { id } = req.params;
            const moviment = await this.movimentService.findById(id);
            if (!moviment) {
                res.status(404).json({ message: 'Moviment not found' });
            } else {
                res.status(200).json(moviment);
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // Outros métodos conforme necessidade
}

module.exports = MovimentController;
