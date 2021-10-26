//import sequelize
const Sequelize = require('sequelize');


// importing connection database
const sequelize = require('../db/database');

const RealEstates = sequelize.define('realestate', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
title: {
     type: Sequelize.STRING,
     allowNull: false,
},
description: {
     type: Sequelize.STRING,
     allowNull: false,
},
price: {
    type: Sequelize.BIGINT,
    allowNull: false,
},
location: {
     type: Sequelize.STRING,
     allowNull: false,
},
category: {
     type: Sequelize.STRING,
     allowNull: false,
},
option: {
     type: Sequelize.STRING,
     allowNull: false,
},
agentfullName: {
     type: Sequelize.STRING,
     allowNull: false,
},
agentPhone: {
    type: Sequelize.BIGINT,
    allowNull: false,
},
agentProfile: {
     type: Sequelize.STRING,
     allowNull: false,
},
agentEmail: {
     type: Sequelize.STRING,
     allowNull: false,
},
photo1: {
     type: Sequelize.STRING,
     allowNull: false,
},
photo2: {
     type: Sequelize.STRING,
     allowNull: false,
},
photo3: {
     type: Sequelize.STRING,
     allowNull: false,
},
photo4: {
     type: Sequelize.STRING,
     allowNull: false,
},
photo5: {
     type: Sequelize.STRING,
     allowNull: false,
},
photo6: {
     type: Sequelize.STRING,
     allowNull: false,
},
});

module.exports = RealEstates;