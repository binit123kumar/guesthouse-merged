const express = require('express');
const cors = require('cors');
const guestRoutes = require('./routes/guestRoutes');

// FIX: open() को dynamic import से बुलाया गया
const open = (...args) => import('open').then(module => module.default(...args));

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/guest', guestRoutes);

app.get('/', (req, res) => {
  res.send('Guest House Backend Running!');
});

app.listen(5000, () => {
  console.log('✅ Server is running on http://localhost:5000');
  open('http://localhost:5000'); // ✅ browser auto open now
});
