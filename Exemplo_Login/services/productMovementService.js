class ProductMovementService {
    constructor(ProductMovement) {
        this.ProductMovement = ProductMovement;
    }

    async create(data) {
        try {
            const productMovement = await this.ProductMovement.create(data);
            return productMovement;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findAll() {
        try {
            const productMovements = await this.ProductMovement.findAll();
            return productMovements;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findById(id) {
        try {
            const productMovement = await this.ProductMovement.findByPk(id);
            if (!productMovement) {
                throw new Error('Product movement not found');
            }
            return productMovement;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async update(id, data) {
        try {
            const productMovement = await this.findById(id);
            await productMovement.update(data);
            return productMovement;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async delete(id) {
        try {
            const productMovement = await this.findById(id);
            await productMovement.destroy();
            return productMovement;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

module.exports = ProductMovementService;
