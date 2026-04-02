const mysql = require('mysql2');

// Connect to your running MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        // default XAMPP user
  password: '',        // default is empty
  database: 'crpms'    // make sure this database exists
});

// Attempt connection
db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err.message);
    process.exit(1); // stop the server if DB fails
  }
  console.log('MySQL database connected successfully');
});

module.exports = db;