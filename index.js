const express = require('express');
const app = express();
const { Sequelize, DataTypes } = require('sequelize');
const axios = require('axios');
// const Entry = require('./model');
const router = require('./routes');
const sequelize = require('./sql');
const Entry = require('./model');
const bodyParser = require('body-parser');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies
  app.use(router)

  sequelize.sync();


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


