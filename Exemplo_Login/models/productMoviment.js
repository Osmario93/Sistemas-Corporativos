const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    class ProductMoviment extends Model {}

    ProductMoviment.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        depositoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
           /* references: {
                model: 'Depositos', // Nome da tabela no banco de dados
                key: 'id'
            }*/
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Products', // Nome da tabela no banco de dados
                key: 'id'
            }
        },
        movimentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Moviments', // Nome da tabela no banco de dados
                key: 'id'
            }
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        precoUnitario: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        dataMovimento: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        sequelize,
        modelName: 'ProductMoviment',
        timestamps: false,
    });

    // Associações com as models
    ProductMoviment.belongsTo(sequelize.models.Deposito, { foreignKey: 'depositoId' });
    ProductMoviment.belongsTo(sequelize.models.Product, { foreignKey: 'productId' });
    ProductMoviment.belongsTo(sequelize.models.Moviment, { foreignKey: 'movimentId' });

    return ProductMoviment;
};

