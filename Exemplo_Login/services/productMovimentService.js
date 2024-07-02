const { ProductMoviment, Deposito, Product, Moviment } = require('../models');

class ProductMovimentService {
    async create(data) {
        try {
            const newproductMoviment = await ProductMoviment.create(data);
            return newproductMoviment;
        } catch (error) {
            throw error;
        }
    }

    async findAll() {
        try {
            const allProductsMoviment = await ProductMoviment.findAll({
                include: [Deposito, Product, Moviment]
            });
            return allProductsMoviment;
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const productMoviment = await ProductMoviment.findByPk(id, {
                include: [Deposito, Product, Moviment]
            });
            if (!productMoviment) {
                throw new Error('ProductMoviment not found.');
            }
            return productMoviment;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const productMoviment = await ProductMoviment.findByPk(id);
            if (!productMoviment) {
                throw new Error('ProductMoviment not found.');
            }
            const updatedProductMoviment = await productMoviment.update(data);
            return updatedProductMoviment;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const productMoviment = await ProductMoviment.findByPk(id);
            if (!productMoviment) {
                throw new Error('ProductMoviment not found.');
            }
            await productMoviment.destroy();
            return true;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductMovimentService;



