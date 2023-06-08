const { DataTypes } = require("sequelize");
const sequelize = require("./sql");

const Entry = sequelize.define('Entry', {
 
    API: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Auth: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    HTTPS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Cors: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Link: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Category: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  module.exports= Entry