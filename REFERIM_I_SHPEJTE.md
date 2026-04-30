# 🚀 Quick Reference - Instagram MERN App

## 🏃 Startim i Shpejtë

```bash
# Windows
start.bat

# Mac/Linux
./start.sh

# Manual
cd backend && npm install && npm run dev  # Terminal 1
cd frontend && npm install && npm start   # Terminal 2
```

## 📍 URLs
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 🔓 Login Testim

**Register një user të ri:**
- Username: test_user
- Email: test@example.com
- Password: password123

Pas login-it, shikoni:
✅ Terminal logs (në backend)
✅ Instagram-like feed
✅ Post faqja me fotot

## 📂 Fajlat Kryesorë

| Fajli | Përshkrimi |
|------|-----------|
| `backend/server.js` | Express server |
| `backend/models/User.js` | Database model |
| `frontend/src/pages/Login.js` | Login page |
| `frontend/src/pages/Post.js` | Post feed page |
| `.env` | Config (backend) |

## 🛠️ Komandat

```bash
# Backend
npm run dev          # Start me auto-reload
npm start           # Production start

# Frontend  
npm start           # Development
npm run build       # Build para deployment

# Root
npm run install-all # Install dependencies
npm run dev         # Start both servers
```

## 📤 Deploy në Render

1. Push në GitHub
2. Render.com → Web Service → Backend
3. Render.com → Static Site → Frontend
4. Shtoni env vars
5. Deploy!

## 🔑 Environment Variables

```
MONGODB_URI=mongodb+srv://admin:admin@...
JWT_SECRET=instagram_mern_secret_key_12345
PORT=5000
NODE_ENV=development
```

## ❌ Probleme të Zakonshme

| Problemi | Zgjidhje |
|----------|---------|
| Port 5000 në përdorim | `taskkill /PID <PID> /F` |
| MongoDB nuk lidhet | Kontrolloni .env |
| npm install error | `npm cache clean --force` |
| CORS error | Check backend/server.js |

## 📊 API Endpoints

```
POST /api/auth/register    [Register user]
POST /api/auth/login       [Login user]
GET  /api/auth/me          [Get user info]
```

## 🎨 Styling

- Login page: Exact copy e Instagram login
- Post feed: Exact copy e Instagram feed
- Responsive: Mobile, tablet, desktop

## 💾 Database

Ruhen të dhënat:
- ✅ Username
- ✅ Email (encrypted)
- ✅ Password (bcrypt)
- ✅ Profile picture
- ✅ Bio

## 📱 Features

✅ Register/Login
✅ Instagram UI
✅ Post feed
✅ Comments
✅ Like animation
✅ Responsive design
✅ JWT auth
✅ Database storage

## 📚 Dokumentet

- `README.md` - Full docs (English)
- `FILLIM_SHQIP.md` - Quick start (Albanian)
- `PERFUNDIM.md` - Project summary

---

**Gëzuar zhvillimin! 🎉**
