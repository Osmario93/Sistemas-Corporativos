const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Deposito extends Model {
        static associate(models) {
            Deposito.hasMany(models.ProductMovement, {
                foreignKey: 'depositoId',
                as: 'productMovements',
            });
        }
    }

    Deposito.init({
        name: DataTypes.STRING,
        situacao: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Deposito',
    });

    return Deposito;
};

