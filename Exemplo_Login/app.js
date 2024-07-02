const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const depositosRouter = require('./routes/depositos');
const productMovimentsRoutes = require('./routes/productMoviments');
const movimentsRouter = require('./routes/moviments');

const db = require('./models'); // Importando a instância do Sequelize

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/depositos', depositosRouter);
app.use('/productMoviments', productMovimentsRoutes);
app.use('/moviments', movimentsRouter);

// Função para controlar a sincronização com o banco de dados
async function ApplyMigrations() {
    try {
        migration_config = {
            create: false,
            alter: false
        };
        await db.sequelize.sync({
            alter: migration_config.alter
        });
        console.log('Sincronização com o banco de dados realizada.')
    } catch (error) {
        console.log('Erro sincronizando o banco de dados', error);
    }
}

// Acionar a sincronização com o banco de dados
ApplyMigrations();

const port = '3000';
app.listen(port, () => {
    console.log('Sistema rodando na porta 3000');
});

module.exports = app;

