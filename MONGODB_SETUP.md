# 📊 MongoDB Setup Guide

## Problem
The app is getting a 500 error on login because MongoDB is not connected properly.

## Solution: Two Options

### Option 1: Use MongoDB Atlas (Cloud) ✅ RECOMMENDED

1. **Go to MongoDB Atlas:**
   - https://www.mongodb.com/cloud/atlas
   - Create a free account

2. **Create a Cluster:**
   - Click "Create a Deployment"
   - Select "Free" tier
   - Choose region (e.g., Virginia)
   - Click "Create"

3. **Create Database User:**
   - Go to "Database Access"
   - Click "Add New Database User"
   - Username: `admin`
   - Password: Create a strong password
   - Click "Add User"

4. **Whitelist Your IP:**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Select "Add Current IP Address"
   - Or add `0.0.0.0/0` for all IPs (NOT SECURE - only for development)
   - Click "Confirm"

5. **Get Connection String:**
   - Go to "Databases"
   - Click "Connect" on your cluster
   - Select "Drivers"
   - Copy the connection string
   - It looks like: `mongodb+srv://username:password@cluster.mongodb.net/dbname`

6. **Update .env File:**
   ```
   MONGODB_URI=mongodb+srv://admin:yourpassword@cluster0.mongodb.net/instagram_mern?retryWrites=true&w=majority
   JWT_SECRET=instagram_mern_secret_key_12345
   PORT=5000
   NODE_ENV=development
   ```

7. **Restart Backend:**
   - Stop the backend server (Ctrl+C)
   - Run `npm run dev` again

---

### Option 2: Use Local MongoDB

#### For Windows:

1. **Download MongoDB Community:**
   - https://www.mongodb.com/try/download/community
   - Download Windows MSI installer
   - Run installer
   - Choose "Install as a Service"
   - Click "Install"

2. **Start MongoDB:**
   ```bash
   # MongoDB should auto-start as a service
   # Or manually start:
   mongod
   ```

3. **Update .env File:**
   ```
   MONGODB_URI=mongodb://localhost:27017/instagram_mern
   JWT_SECRET=instagram_mern_secret_key_12345
   PORT=5000
   NODE_ENV=development
   ```

4. **Restart Backend**

#### For Mac:

```bash
# Install MongoDB with Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community

# Update .env
MONGODB_URI=mongodb://localhost:27017/instagram_mern
```

#### For Linux:

```bash
# Ubuntu/Debian
sudo apt-get install -y mongodb

# Start MongoDB
sudo systemctl start mongodb

# Update .env
MONGODB_URI=mongodb://localhost:27017/instagram_mern
```

---

## Verify Connection

After updating .env and restarting the backend, you should see:

```
✅ MongoDB connected successfully
🚀 Server running on http://localhost:5000
```

If you still see an error, check:
1. ✓ Connection string is correct
2. ✓ Username and password are correct
3. ✓ IP is whitelisted (for MongoDB Atlas)
4. ✓ MongoDB is running (for local MongoDB)

---

## Test Login

Once MongoDB is connected:

1. **Register a new user:**
   - Username: `test_user`
   - Email: `test@example.com`
   - Password: `password123`

2. **Login:**
   - Use username, email, or phone
   - Password: `password123`

3. **Check terminal:**
   ```
   ✅ USER REGISTERED!
   Username: test_user
   Email: test@example.com
   ```

---

## Need Help?

- **MongoDB Atlas Help:** https://docs.atlas.mongodb.com/
- **MongoDB Local Help:** https://docs.mongodb.com/manual/installation/

Choose Option 1 (MongoDB Atlas) for easiest setup! 🚀
