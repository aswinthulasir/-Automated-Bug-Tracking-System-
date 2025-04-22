// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const bugRoutes = require('./routes/bugRoutes');

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/bugtracker');

// app.use('/api/auth', authRoutes);
// app.use('/api/bugs', bugRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const bugRoutes = require('./routes/bugRoutes');

// Load environment variables from .env
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB using MONGO_URL from .env
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/bugs', bugRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
