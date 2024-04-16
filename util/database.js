const Sequelize = require('sequelize');

const sequelize = new Sequelize('appointment-booking-app', 'root', 'Ashish@123', {
    dialect: 'mysql',
    host: 'localhost'
} );

module.exports = sequelize;