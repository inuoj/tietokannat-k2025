const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'jouni',
  password: 'jouni2003',
  database: 'opintojakso'
});
module.exports = connection;
