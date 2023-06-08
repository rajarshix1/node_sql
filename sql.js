const { Sequelize } = require("sequelize");
require('dotenv').config()
const sequelize = new Sequelize(`mysql://${process.env.USER}:${process.env.PASS}@localhost:3306/new_db`);
  
module.exports=sequelize