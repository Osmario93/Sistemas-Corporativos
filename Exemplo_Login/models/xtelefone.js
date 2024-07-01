// ./models/xtelefone.js
const Sequelize = require('sequelize');
module.exports= (sequelize) => {
    const XTelefone = sequelize.define('XTelefone',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        Number:{
            type: Sequelize.STRING,
            allowNull:false
        },
    });

    //Associação com User
    XTelefone.associate = (models) =>{
        XTelefone.belongsTo(sequelize.models.User,{
            foreingKey: 'userId',
            as: 'User'
        });
    };
    return XTelefone;
};
