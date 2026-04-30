# 🔐 Login/Register Guide

## Understanding the 401 Error

A **401 Unauthorized** error means:
- ❌ User not found (you haven't registered yet)
- OR ❌ Password is incorrect
- OR ❌ Wrong username/email/phone

## Step 1: Register First ✅

Before you can login, you must register:

1. **Open http://localhost:3000**
2. **Click "Sign up"** (or toggle to Sign up mode)
3. **Fill in the form:**
   - Username: `testuser` (or any username)
   - Email: `test@example.com` (any valid email)
   - Password: `password123` (minimum 6 characters)
   - Phone: `1234567890` (optional)

4. **Click "Sign Up"**
5. **Check terminal for confirmation:**
   ```
   ✅ NEW USER REGISTERED!
   Username: testuser
   Email: test@example.com
   ```

## Step 2: Login ✅

After registering, login with the same credentials:

1. **Click "Log in"** (toggle back to Login mode)
2. **Enter username/email/phone:** `testuser` or `test@example.com`
3. **Enter password:** `password123`
4. **Click "Log in"**
5. **Check terminal for confirmation:**
   ```
   🔍 Login attempt:
   Input: testuser
   Searched by username: ✅ Found
   ✅ Login successful!
   Username: testuser
   Email: test@example.com
   ```

## Troubleshooting 401 Errors

### Error: "Invalid credentials - User not found"
**Solution:**
- You haven't registered yet → Go to Sign Up
- You used a different username/email → Check what you registered with
- Database is empty → Try registering a new account

### Error: "Invalid credentials - Wrong password"
**Solution:**
- Check password is correct
- Make sure password is minimum 6 characters
- Password is case-sensitive

### Error: "Email already exists"
**Solution:**
- That email is already registered
- Use a different email address
- Or try logging in instead of registering

## Check Backend Connection

To verify MongoDB is connected, go to:
```
http://localhost:5000/api/health
```

You should see:
```json
{
  "status": "OK",
  "message": "Instagram MERN API is running",
  "mongodb": "✅ Connected",
  "timestamp": "..."
}
```

## Terminal Logs to Check

After registering/logging in, check the **backend terminal** for detailed logs:

```
✅ NEW USER REGISTERED!
  Username: testuser
  Email: test@example.com
  Phone: N/A
  Time: 4/30/2026, 10:30:00 AM
```

```
✅ Login successful!
  Username: testuser
  Email: test@example.com
  Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Quick Start

1. **Open:** http://localhost:3000
2. **Click:** "Sign up"
3. **Enter:**
   - Username: `demo`
   - Email: `demo@test.com`
   - Password: `demo123`
4. **Click:** "Sign Up"
5. **Then click:** "Log in"
6. **Enter:**
   - Username/Email: `demo@test.com`
   - Password: `demo123`
7. **Click:** "Log in"

---

If you still get 401 errors:
1. Check backend terminal for login attempt logs
2. Verify MongoDB is connected (`/api/health`)
3. Make sure you registered before trying to login
4. Clear browser cache (Ctrl+Shift+Delete) and try again

**Happy Instagramming! 📸**
