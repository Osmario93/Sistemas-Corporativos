// ./controllers/userController.js

class userController{
    constructor(userService){
        this.userService = userService; //Propriedade da classe "userService"
    }
    async create(req, res){
        const {nome, email, senha} = req.body;//Será alterado porque tem um erro de código
        try{
            const novoUser = await this.userService.create(nome, email, senha);
            res.status(200).json(novoUser);
        }
        catch(error){
            res.status(500).json({error:'Erro ao inserir o novo usuário.'});
        }
    }

    //
    async localizaTodosUsuarios(req, res) {
        const { page, perPage } = req.query;
        const pageNumber = parseInt(page) || 1;
        const pageSize = parseInt(perPage) || 10;

        try {
            const allUsers = await this.userService.localizaTodosUsuarios(pageNumber, pageSize);
            res.status(200).json(allUsers);
        } catch (error) {
            res.status(400).json({ error: 'Erro ao buscar usuários.' });
        }
    }
    //
    async localizaUsuarioPorId(req,res){
        const {id} = req.body;
        try{
        const allUser = await this.userService.localizaUsuarioPorId(id);
        res.status(200).json(allUser);
        }
        catch(error){
            res.status(400).json({error:'login inválido.'});
        }
    }
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const token = await this.userService.login(email, senha);
            res.status(200).json({ message: 'Login bem-sucedido!', token: token });
        } catch (error) {
            res.status(500).json({ error: 'Erro ao fazer login.' });
        }
    }
    
    }
module.exports = userController;