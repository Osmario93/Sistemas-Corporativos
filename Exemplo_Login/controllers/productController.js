class ProductMovimentController {
    constructor(productMovimentService) {
        this.productMovimentService = productMovimentService;
    }

    async create(req, res) {
        try {
            const productMoviment = await this.productMovimentService.create(req.body);
            res.status(201).json(productMoviment);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao inserir a nova Movimentação.' });
        }
    }

    async findAll(req, res) {
        try {
            const productsMoviments = await this.productMovimentService.findAll();
            res.status(200).json(productsMoviments);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao buscar todas as Movimentações.' });
        }
    }

    async findById(req, res) {
        try {
            const productMoviment = await this.productMovimentService.findById(req.params.id);
            res.status(200).json(productMoviment);
        } catch (error) {
            res.status(404).json({ error: 'Erro ID de Movimentação não encontrado.' });
        }
    }

    async update(req, res) {
        try {
            const productMoviment = await this.productMovimentService.update(req.params.id, req.body);
            res.status(200).json(productMoviment);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao atualizar a Movimentação.' });
        }
    }

    async delete(req, res) {
        try {
            await this.productMovimentService.delete(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(404).json({ error: 'Erro ao excluir a Movimentação.' });
        }
    }
}

module.exports = ProductMovimentController;


