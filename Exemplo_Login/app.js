var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var depositosRouter = require('./routes/depositos');
var productMovementsRouter = require('./routes/productMovements');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/depositos', depositosRouter);
app.use('/productMovements', productMovementsRouter);


const db = require('./models');


//Função para controlar a sincronização com o banco de dados

async function ApplyMigrations(){
try{
    migration_config={
        create: false,  //fazer um drop na tabela user, e depois colocar true em ambas, após executar novamente alterar para false.
        alter: false
    };
    await db.sequelize.sync({
        alter: migration_config.alter
    });
    console.log('Sincronização com o banco de dados realizada.')
}
catch(error){
    console.log('Erro sincronizando o banco de dados', error);
}
}

// Acionar a sincronização com o banco de dados 

ApplyMigrations();

var port = '3000';
app.listen(port);
console.log('Sistema rodando na porta 3000');

module.exports = app;
