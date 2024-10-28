// server/routes/nameRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/nameController'); // Ensure this path is correct

// Define your routes
router.get('/students', studentController.getStudents); // This function should be defined in nameController.js
router.post('/students', studentController.addStudent); // This function should be defined in nameController.js

module.exports = router; // Export the router
    