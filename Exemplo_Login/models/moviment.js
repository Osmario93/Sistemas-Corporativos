const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Moviment = sequelize.define('Moviment', {
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false,
  });

  return Moviment;
};



