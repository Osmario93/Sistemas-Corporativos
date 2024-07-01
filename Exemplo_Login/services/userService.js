// ./services/userService.js
// ./services/userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class userService{
    //Construtor da classe recebe a user model
    constructor(userModel){
        this.User = userModel;
    }
    async create(nome, email, senha){
        try{
            // Criptografando a senha
            const hashedPassword = await bcrypt.hash(senha, 10);
            const novoUser = await this.User.create(
                {
                    nome: nome,
                    email: email,
                    senha: hashedPassword
                }
            );
            novoUser.senha= hashedPassword;
            return novoUser ? novoUser: null;
            //Variante do return "Ternário acima"
            /*if (novoUser){
                return novoUser;
            }
            else{
                return null;
            }*/
        }
        catch(error){
            throw error;
        }

    } 
//localizaTodosUsuarios
async localizaTodosUsuarios(pageNumber, pageSize) {
    try {
        const offset = (pageNumber - 1) * pageSize;
        const { count, rows } = await this.User.findAndCountAll({
            offset: offset,
            limit: pageSize
        });

        return {
            totalItems: count,
            totalPages: Math.ceil(count / pageSize),
            currentPage: pageNumber,
            users: rows
        };
    } catch (error) {
        throw error;
    }
}

//localizaUsuarioPeloId
async localizaUsuarioPorId(id){
    try{ 
        const AllUser = await this.User.findOne({ where: {id} });
        return AllUser? AllUser: null;
    }
    catch(error){
        throw error;
    }

}
async login(email, senha) {
    try {
        const user = await this.User.findOne({ where: { email: email } });

        if (!user) {
            throw new Error('Usuário não encontrado.');
        }

        const isMatch = await bcrypt.compare(String(senha), String(user.senha));

        if (!isMatch) {
            throw new Error('Credenciais inválidas.');
        }

       // Criar token JWT
       const payload = { userId: user.id }; // Incluindo o ID do usuário no payload
       const token = jwt.sign(payload, 'admin_admin', { expiresIn: '1h' });

        return token;
    } catch (error) {
        throw error;
    }
}
}
module.exports = userService;

