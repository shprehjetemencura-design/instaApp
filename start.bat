@echo off
echo.
echo Starting Instagram MERN App...
echo.

start cmd /k "cd backend && npm install && npm run dev"
timeout /t 3
start cmd /k "cd frontend && npm install && npm start"

echo.
echo Backend running on http://localhost:5000
echo Frontend running on http://localhost:3000
echo.
