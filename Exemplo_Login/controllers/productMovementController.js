class ProductMovementController {
    constructor(productMovementService) {
        this.productMovementService = productMovementService;
    }

    async create(req, res) {
        try {
            const productMovement = await this.productMovementService.create(req.body);
            res.status(201).json(productMovement);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const productMovements = await this.productMovementService.findAll();
            res.status(200).json(productMovements);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const productMovement = await this.productMovementService.findById(req.params.id);
            res.status(200).json(productMovement);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const productMovement = await this.productMovementService.update(req.params.id, req.body);
            res.status(200).json(productMovement);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await this.productMovementService.delete(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = ProductMovementController;
