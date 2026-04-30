const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/instagram_mern';
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    console.log('\n📝 MongoDB Connection Tips:');
    console.log('1. Make sure MongoDB Atlas credentials are correct');
    console.log('2. Whitelist your IP in MongoDB Atlas');
    console.log('3. Or use local MongoDB: mongodb://localhost:27017/instagram_mern');
    console.log('4. Update .env file with correct MONGODB_URI\n');
    process.exit(1);
  }
};

connectDB();

// Routes
app.use('/api/auth', require('./routes/auth'));

// Health check
app.get('/api/health', (req, res) => {
  const mongooseConnected = require('mongoose').connection.readyState === 1;
  res.json({
    status: 'OK',
    message: 'Instagram MERN API is running',
    mongodb: mongooseConnected ? '✅ Connected' : '❌ Not connected',
    timestamp: new Date().toLocaleString()
  });
});

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Instagram MERN App API' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}\n`);
  console.log(`📊 API Endpoint: http://localhost:${PORT}/api\n`);
});

module.exports = app;
