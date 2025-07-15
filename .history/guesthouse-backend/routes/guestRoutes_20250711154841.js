const express = require('express');
const router = express.Router();
const sql = require('mssql');
const dbConfig = require('../db/sql');

router.post('/register', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    let pool = await sql.connect(dbConfig);
    const query = `
      INSERT INTO Guests (FullName, Email, Phone)
      VALUES (@name, @Email, @Phone)
    `;

    await pool.request()
      .input('name', sql.VarChar, name)
      .input('Email', sql.VarChar, email)
      .input('Phone', sql.VarChar, phone)
      .query(query);

    res.status(200).json({ message: 'Guest Registered Successfully!' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Registration failed.' });
  }
});

module.exports = router;
