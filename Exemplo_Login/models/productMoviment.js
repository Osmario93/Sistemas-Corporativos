'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductMoviment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  ProductMoviment.init({
    depositId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    movimentId: DataTypes.INTEGER,
    quantidade: DataTypes.INTEGER,
    precoUnitario: DataTypes.DOUBLE,
    dataMovimento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ProductMoviment',
  });
  return ProductMoviment;
};