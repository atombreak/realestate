const Sequelize = require('sequelize');

const database = new Sequelize(
  'realestates', 
  'root', 
  'root',  
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

database.sync().then(() => {
  console.log('Drop and Resync with { force: true }');
}).catch(err => console.log(err))


module.exports = database;
