// routes/users.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const userService = require('../services/userService');//classe
const UserService = new userService(db.User);//Construção do objeto

const userController = require('../controllers/userController');//classe
const UserController = new userController(UserService);//Construção do objeto
const auth = require('../middleware/auth');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('módulo de usuários está rodando.');
});

//Rota para criar um novo usuário
router.post('/novoUsuario',function(req,res, next){
  UserController.create(req,res);
});

//Rota para localizar um usuário

// Rota para localizar todos os usuários (com paginação)
router.get('/localizaTodosUsuarios', function (req, res, next) {
  UserController.localizaTodosUsuarios(req, res);
});
// Rota para localizar usuário por ID
router.get('/localizaUsuarioPorId', function(req,res,next){
  UserController.localizaUsuarioPorId(req,res);
});

// Rota para realizar o login
router.post('/login', function(req, res, next) {
  UserController.login(req, res);
});

// Rota protegida que requer autenticação
router.get('/profile', auth.verifyToken, (req, res) => {
  res.status(200).json({ message: 'Rota protegida! Olá, ' + req.user.nome });
});


module.exports = router;
