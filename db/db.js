const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "locahost",
    user: "root",
    database: "realestates",
    password: "root",
})

connection.connect()

module.exports = connection;