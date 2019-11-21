// SQL model definition throught sequelize ORM
const sequelize = require('sequelize');
const { getSequelizeSQLConnection } = require('../../configs/databaseConnection');

const Users = getSequelizeSQLConnection.define('Users', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: sequelize.INTEGER(25).ZEROFILL.UNSIGNED
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