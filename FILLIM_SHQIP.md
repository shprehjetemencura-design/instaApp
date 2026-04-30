# Instagram MERN App - Udhëzim i Shpejtë

## 🚀 Fillimi

### Për Windows:
1. Hapni PowerShell ose Command Prompt
2. Shkoni në folderin e projektit:
   ```
   cd c:\Users\hoxha\Desktop\project
   ```
3. Drejtpërdrejt, ekzekutoni:
   ```
   start.bat
   ```

### Për Mac/Linux:
```bash
cd ~/Desktop/project
chmod +x start.sh
./start.sh
```

## 📖 Hapat Manual (Nëse duon të startosh vetë)

### Terminal 1 - Backend:
```bash
cd backend
npm install
npm run dev
```
Backend do të jetë në: http://localhost:5000

### Terminal 2 - Frontend:
```bash
cd frontend
npm install
npm start
```
Frontend do të jetë në: http://localhost:3000

## 🔑 Përdorimi i Aplikacionit

1. **Register** - Krijoni llogari të re
   - Username: cili do emër
   - Email: email@example.com
   - Password: 6 karaktere minimum

2. **Login** - Hyrni me kredencialet tuaja

3. **View Posts** - Shikoni feed-in Instagram

4. **Logout** - Dilni nga aplikacioni

## 💾 Database

Informacioni i loginimit ruhet në MongoDB:
- Username
- Email
- Password (i koduar)
- Foto profili
- Bio

**Logu në Terminal:** Kur dikush regjistrohet ose logohet, do të shihni mesazh në terminal.

```
✅ USER LOGGED IN!
Username: john_doe
Email: john@example.com
Time: 4/29/2026, 10:35:00 AM
```

## 🌐 Deploy në Render

1. Push kodin në GitHub
2. Shkoni në render.com
3. Krijoni Web Service për backend
4. Krijoni Static Site për frontend
5. Shtoni environment variables
6. Deploy!

## ❌ Problemet

### Port 5000 në përdorim?
```bash
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### MongoDB nuk lidhet?
- Kontrolloni .env file
- Sigurohuni se IP juaj është në whitelist

### npm install error?
```bash
npm cache clean --force
npm install
```

## 📁 Struktura

```
project/
├── backend/      # Node.js + Express
├── frontend/     # React
├── README.md     # Dokumentacioni
└── start.bat     # Auto startup
```

## 🎨 Features

✅ Instagram Login Page
✅ Instagram-like Post Feed
✅ User Authentication
✅ MongoDB Database
✅ Responsive Design
✅ Production Ready

## 🚀 Gata?

Hapni: http://localhost:3000

Gëzuar zhvillimin! 💪
