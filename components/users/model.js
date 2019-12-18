// SQL model definition throught sequelize ORM
const Sequelize = require('sequelize');
const databaseConnection = require('../../configs/databaseConnection');

const Users = databaseConnection.getSequelizeSQLConnection.define('Users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER(25).ZEROFILL.UNSIGNED
  },
  uuid: {
    allowNull: false,
    autoIncrement: false,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING(50)
  }
});
 
module.exports = Users;