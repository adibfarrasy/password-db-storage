// Import MySQL
const mysql = require("mysql2");
const { promisify } = require("util");

// Establish MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pass_storage",
});

// Export connection params
exports.query = promisify(connection.query).bind(connection);
