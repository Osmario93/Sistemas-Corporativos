'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Deposito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Deposito.hasMany(models.ProductMoviment, { foreignKey: 'depositId' });
    }
  }
  Deposito.init({
    Nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Deposito',
  });
  return Deposito;
};