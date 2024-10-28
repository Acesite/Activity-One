// server.js
const express = require('express');
const cors = require('cors');
const nameRoutes = require('./routes/nameRoutes'); // Ensure this path is correct

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Use the routes
app.use('/api', nameRoutes); // Prefix your routes with '/api'

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
