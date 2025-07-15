const express = require('express');
const cors = require('cors');
const guestRoutes = require('./routes/guestRoutes');

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
});
