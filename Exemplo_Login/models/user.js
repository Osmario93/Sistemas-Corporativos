'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_WORD = 'admin_admin';

module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    async login(id, senha) {
      try {
        // Localizar o usuário pelo ID
        const user = await User.findByPk(id);
        if (!user) {
          throw new Error('Usuário não encontrado.');
        }

        // Verificar a senha usando bcrypt
        const isMatch = await bcrypt.compare(senha, user.senha);
        if (!isMatch) {
          throw new Error('Credenciais inválidas.');
        }

        // Criar token JWT
        const token = jwt.sign({ userId: user.id }, SECRET_WORD);

        return token;
      } catch (error) {
        throw error;
      }
    }

  }
  User.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};