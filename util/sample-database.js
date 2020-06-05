const Sequelize = require('sequelize');

const sequelize = new Sequelize('SchemaName', 'User', 'Password', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;