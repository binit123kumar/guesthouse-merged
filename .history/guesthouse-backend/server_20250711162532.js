const express = require('express');
const cors = require('cors');
const open = require('open'); // <-- browser auto-open package
const guestRoutes = require('./routes/guestRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/guest', guestRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Guest House Backend Running!');
});

// Server Start
app.listen(5000, () => {
  console.log('✅ Server is running on http://localhost:5000');
  open('http://localhost:5000'); // <-- browser auto-open
});

