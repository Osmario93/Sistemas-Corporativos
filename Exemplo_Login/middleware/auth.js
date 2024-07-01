// ./middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const db = require('../models/index');

// Importando o modelo de usuário
const { User } = db.sequelize.models;

// Palavra secreta
const SECRET_WORD = 'admin_admin';

// Middleware para verificar o token JWT
exports.verifyToken = (req, res, next) => {
    // Obter o token do cabeçalho da solicitação
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
    }
// Obter o token do cabeçalho da solicitação
const token = req.headers.authorization.split(' ')[1];

    // Verificar e decodificar o token
    jwt.verify(token, SECRET_WORD, async (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token de autenticação inválido.' });
        }

        // Verificar se o usuário existe no banco de dados
        const userId = decoded.userId;
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(401).json({ message: 'Usuário associado ao token não encontrado.' });
        }
       // Adicionar o objeto de usuário decodificado à solicitação para uso posterior
        req.user = user;
        next();
    });
};
