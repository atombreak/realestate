//import sequelize
const bcrypt = require("bcrypt")
const Sequelize = require('sequelize');


// importing connection database
const sequelize = require('../db/database');

const Agents = sequelize.define('agents', {
    id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
    fullName: {
       type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
       type: Sequelize.STRING,
        allowNull: false,
    },
    phone: {
       type: Sequelize.BIGINT,
        allowNull: false,
    },
    password: {
       type: Sequelize.STRING,
        allowNull: false,
    },
    profile: {
       type: Sequelize.STRING,
    } ,
});

Agents.beforeCreate( function(agent, options) {
    const salt = bcrypt.genSaltSync();
    agent.password = bcrypt.hashSync(agent.password, salt)
})

module.exports = Agents