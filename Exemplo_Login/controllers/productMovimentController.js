class ProductMovimentController {
    cconstructor(productMovimentService) {
        this.ProductMovimentService = productMovimentService;
    }

    async create(req, res) {
        try {
            const newproductMoviment = await this.ProductMovimentService.create(req.body);
            res.status(201).json(newProductMoviment);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao inserir o nova Movimentação.'});
        }
    }

    async findAll(req, res) {
        try {
            const allProductsMoviments = await this.ProductMovimentService.findAll();
            res.status(200).json(allProductsMoviments);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao buscar todas as Movimentações.'});
        }
    }

    async findById(req, res) {
        try {
            const productMoviment = await this.productsMoviment.findById(req.body.id);
            res.status(200).json(productMoviment);
        } catch (error) {
            res.status(404).json({ error: 'Erro ID de Movimentação não encontrado.' });
        }
    }

    async update(req, res) {
        try {
            const updatedProductMoviment = await this.productMovimentService.update(req.params.id, req.body);
            res.status(200).json(updatedProductMoviment);
        } catch (error) {
            res.status(400).json({ error:'Erro ao inserir ao atualizar a Movimentação.' });
        }
    }

    async delete(req, res) {
        try {
            await this.productMovimentService.delete(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(404).json({ error: 'Erro ao excluir a Movimentação.'});
        }
    }
}

module.exports = ProductMovimentController;
