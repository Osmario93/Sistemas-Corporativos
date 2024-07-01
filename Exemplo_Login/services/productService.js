class ProductService {
    constructor(Product) {
        this.Product = Product;
    }

    async create(nome, description, isActive) {
        try {
            const product = await this.Product.create(nome, description, isActive);
            return product;
        } catch (error) {
            throw error;
        }
    }

    async findAll() {
        try {
            const products = await this.Product.findAll();
            return products;
        } catch (error) {
            throw error;
        }
    }

    async findById(id) {
        try {
            const product = await this.Product.findByPk(id);
            if (!product) {
                throw new Error('Produto não encontrado.');
            }
            return product;
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const product = await this.findById(id);
            const updatedProduct = await product.update(data);
            return updatedProduct;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const product = await this.findById(id);
            await product.destroy();
            return;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductService;


