const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rahul8090", // Aapka apna local password
  database: "treeniti",
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;