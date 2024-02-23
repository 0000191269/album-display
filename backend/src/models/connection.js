const mysql = require(`mysql2/promise`);
require("dotenv").config();

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "senai54321",
    database: "album_db"
});

module.exports = connection;
