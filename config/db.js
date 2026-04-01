const mysql = require('mysql2');


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',        
  password: '',        
  database: 'crpms'    


db.connect((err) => {
  if (err) {
    console.error('MySQL connection failed:', err.message);
    process.exit(1); 
  }
  console.log('MySQL database connected successfully');
});

module.exports = db;
