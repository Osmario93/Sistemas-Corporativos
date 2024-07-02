// ./models/xtelefone.js
const Sequelize = require('sequelize');
module.exports= (sequelize) => {
    const Deposito = sequelize.define('Deposito',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        Nome:{
            type: Sequelize.STRING,
            allowNull:false
        },
    });

    //Associação com ProductMoviment
    Deposito.associate = (models) =>{
        Deposito.hasMany(sequelize.models.ProductMoviment,{
            foreingKey: 'productId',
            as: 'Product'
        });
        Deposito.belongsTo(sequelize.models.Deposito,{
            foreingKey: 'depositoId',
            as: 'Deposito'
        });
    };
    return Deposito;
}