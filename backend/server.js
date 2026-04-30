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
    const mongoUri =
      process.env.MONGODB_URI || 'mongodb://localhost:27017/instagram_mern';

    await mongoose.connect(mongoUri);

    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

connectDB();


// 🔴 DEBUG LOGIN (KY DO SHFAQET NE RENDER LOGS)
app.post("/api/login", (req, res) => {
  console.log("\n🔍 LOGIN REQUEST");
  console.log("📧 Email:", req.body.email);
  console.log("🔑 Password:", req.body.password);
  console.log("📦 Full Body:", req.body);
  console.log("=====================================\n");

  res.json({ message: "Login debug received" });
});


// Routes (auth real)
app.use('/api/auth', require('./routes/auth'));


// Health check
app.get('/api/health', (req, res) => {
  const mongooseConnected = mongoose.connection.readyState === 1;
  res.json({
    status: 'OK',
    mongodb: mongooseConnected ? '✅ Connected' : '❌ Not connected',
  });
});


// Root
app.get('/', (req, res) => {
  res.json({ message: 'Instagram MERN API' });
});


// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API: http://localhost:${PORT}/api\n`);
});