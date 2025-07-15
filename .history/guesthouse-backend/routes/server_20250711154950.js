const express = require('express');
const cors = require('cors');
const guestRoutes = require('./routes/guestRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/guest', guestRoutes);

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
