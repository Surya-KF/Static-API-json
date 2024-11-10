const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Enable CORS to allow requests from frontend
app.use(cors());

// Import JSON data
const data = require('./data.json');

// Define an API route to serve the JSON data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
