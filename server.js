const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // initialize DB

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

// Simple test route to check server and DB
app.get('/', (req, res) => {
  // Example test query to MySQL
  db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      return res.status(500).send('Database test query failed');
    }
    res.send(`Server is running! Test query result: ${results[0].solution}`);
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));