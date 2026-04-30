const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    console.log(`\n📝 Register attempt:\n  Username: ${username}\n  Email: ${email}\n  Phone: ${phone || 'N/A'}`);

    if (!username || !email || !password) {
      console.log('❌ Missing required fields');
      return res.status(400).json({ message: 'Please provide username, email and password' });
    }

    // Check if username or email already exists
    let user = await User.findOne({ username });
    if (user) {
      console.log('❌ Username already exists');
      return res.status(400).json({ message: 'Username already exists' });
    }

    user = await User.findOne({ email });
    if (user) {
      console.log('❌ Email already exists');
      return res.status(400).json({ message: 'Email already exists' });
    }

    user = new User({
      username,
      email,
      phone: phone || null,
      password
    });

    await user.save();
    console.log(`✅ User saved to database`);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    console.log(`✅ NEW USER REGISTERED!\n  Username: ${username}\n  Email: ${email}\n${phone ? '  Phone: ' + phone + '\n' : ''}  Time: ${new Date().toLocaleString()}\n`);

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone || '',
        profilePicture: user.profilePicture,
        bio: user.bio
      }
    });
  } catch (error) {
    console.error('❌ Registration error:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Login - Auto-creates user if doesn't exist (Demo Mode)
router.post('/login', async (req, res) => {
  try {
    const { usernameOrEmailOrPhone, password } = req.body;

    console.log(`\n🔍 Login attempt:\n  Input: ${usernameOrEmailOrPhone}\n  Password: ${'*'.repeat(password.length)}`);

    if (!usernameOrEmailOrPhone || !password) {
      console.log('❌ Missing credentials');
      return res.status(400).json({ message: 'Please provide username/email/phone and password' });
    }

    // Try to find user by username, email, or phone
    let user = await User.findOne({ username: usernameOrEmailOrPhone }).select('+password');
    console.log(`  Searched by username: ${user ? '✅ Found' : '❌ Not found'}`);
    
    if (!user) {
      user = await User.findOne({ email: usernameOrEmailOrPhone }).select('+password');
      console.log(`  Searched by email: ${user ? '✅ Found' : '❌ Not found'}`);
    }
    
    if (!user && usernameOrEmailOrPhone.match(/^[0-9]+$/)) {
      user = await User.findOne({ phone: usernameOrEmailOrPhone }).select('+password');
      console.log(`  Searched by phone: ${user ? '✅ Found' : '❌ Not found'}`);
    }

    // If user doesn't exist, create them automatically (Demo Mode)
    if (!user) {
      console.log('  👤 User not found - Creating new user automatically...');
      
      // Check if input is email format
      const isEmail = usernameOrEmailOrPhone.includes('@');
      
      user = new User({
        username: isEmail ? `user_${Date.now()}` : usernameOrEmailOrPhone,
        email: isEmail ? usernameOrEmailOrPhone : `${usernameOrEmailOrPhone}@instagram.local`,
        phone: usernameOrEmailOrPhone.match(/^[0-9]{10,}$/) ? usernameOrEmailOrPhone : null,
        password: password
      });

      await user.save();
      console.log(`  ✅ New user created automatically!`);
    } else {
      // User exists, verify password
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        console.log('❌ Password mismatch - Invalid credentials\n');
        return res.status(401).json({ message: 'Invalid credentials - Wrong password' });
      }
      console.log('  ✅ Password verified');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });

    console.log(`✅ Login successful!\n  Username: ${user.username}\n  Email: ${user.email}\n  Token: ${token.substring(0, 20)}...\n`);

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        phone: user.phone || '',
        profilePicture: user.profilePicture,
        bio: user.bio
      }
    });
  } catch (error) {
    console.error('❌ Login error:', error.message);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get current user
router.get('/me', require('../middleware/auth'), async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
