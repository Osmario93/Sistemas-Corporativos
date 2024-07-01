const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductMovement extends Model {
        static associate(models) {
            ProductMovement.belongsTo(models.Deposito, {
                foreignKey: 'depositoId',
                as: 'deposito',
            });
            ProductMovement.belongsTo(models.Product, {
                foreignKey: 'productId',
                as: 'product',
            });
        }
    }

    ProductMovement.init({
        type: DataTypes.STRING,
        quantity: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'ProductMovement',
    });

    return ProductMovement;
};

