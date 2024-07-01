// ./models/user.js
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Palavra secreta para criar tokens JWT
const SECRET_WORD = 'admin_admin';


module.exports= (sequelize) => {
    const User = sequelize.define('User',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
            
        },
        nome:{
            type: Sequelize.STRING,
            allowNull:false
        },
        email:{
            type: Sequelize.STRING,
            unique:true
        },
        senha:{
            type:Sequelize.STRING,
            allowNull:false
        }
    });

    // Método para realizar o login
    User.login = async function (id, senha) {
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
    };
        return User;
};
