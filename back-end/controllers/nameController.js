// server/controllers/nameController.js
const db = require('../db'); // Assuming you created a db.js file for database connection

// Get all student profiles
exports.getStudents = (req, res) => {
  const sql = 'SELECT * FROM tbl_profile'; // Update table name if necessary
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
};

// Add a new student profile
exports.addStudent = (req, res) => {
  const { name, phone_number, email, btc, best_time } = req.body; // Update to include necessary fields

  // Validate required fields
  if (!name || !phone_number || !email || !btc || !best_time) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // SQL to insert the student profile
  const sql = `
    INSERT INTO tbl_profile (name, phone_number, email, btc, best_time) 
    VALUES (?, ?, ?, ?, ?)`;
  
  // Execute the SQL query with the new fields included
  db.query(sql, [name, phone_number, email, btc, best_time], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json({ message: 'Student added successfully', studentId: result.insertId });
  });
};
