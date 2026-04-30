#!/bin/bash

echo ""
echo "Starting Instagram MERN App..."
echo ""

# Start backend in background
cd backend
npm install
npm run dev &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Start frontend
cd ../frontend
npm install
npm start

# Cleanup on exit
trap "kill $BACKEND_PID" EXIT
