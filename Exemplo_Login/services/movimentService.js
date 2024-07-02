// ./services/movimentService.js

const { Moviment } = require('../models');

class MovimentService {
    async create(nome, tipo) {
        try {
            return await Moviment.create({ nome, tipo });
        } catch (error) {
            throw new Error('Erro ao criar movimento: ' + error.message);
        }
    }

    async findAll() {
        try {
            return await Moviment.findAll();
        } catch (error) {
            throw new Error('Erro ao buscar movimentos: ' + error.message);
        }
    }

    async findById(id) {
        try {
            return await Moviment.findByPk(id);
        } catch (error) {
            throw new Error('Erro ao buscar movimento por ID: ' + error.message);
        }
    }
    // Outros métodos conforme necessidade
}

module.exports = new MovimentService();
