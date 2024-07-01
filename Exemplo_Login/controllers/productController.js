class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    async create(req, res) {
        try {
            const product = await this.productService.create(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const products = await this.productService.findAll();
            res.status(200).json(products);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const product = await this.productService.findById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const product = await this.productService.update(req.params.id, req.body);
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            await this.productService.delete(req.params.id);
            res.status(204).end();
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = ProductController;

