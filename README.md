# Instagram MERN App

A full-stack Instagram clone built with MERN (MongoDB, Express, React, Node.js) stack, designed to be deployed on Render.

## Features

- 🔐 User authentication with JWT
- 📝 User registration and login
- 📸 Instagram-like post feed
- 💾 MongoDB database
- 📱 Responsive design
- 🎨 Instagram-style UI

## Project Structure

```
project/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .env.example
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── pages/
    │   │   ├── Login.js
    │   │   ├── Login.css
    │   │   ├── Post.js
    │   │   └── Post.css
    │   ├── App.js
    │   ├── App.css
    │   └── index.js
    └── package.json
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB account (MongoDB Atlas)

## Local Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd project
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend folder with:
```
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/instagram_mern?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

Start the backend:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

In a new terminal:
```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

## How to Use

1. **Register** - Create a new account with username, email, and password
2. **Login** - Use your credentials to log in
3. **View Feed** - See Instagram-like posts after login
4. **Logout** - Click logout to return to login page

## Database Information

The app uses MongoDB Atlas. User login information will be:
- ✅ Saved to the MongoDB database
- ✅ Displayed in the terminal when someone logs in
- ✅ Retrieved and displayed when needed

## Deployment on Render

### Step 1: Prepare for Deployment

1. Push your code to GitHub
2. Update environment variables:
   - `MONGODB_URI` - Your MongoDB connection string
   - `JWT_SECRET` - A strong secret key

### Step 2: Deploy Backend

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Set the build command: `cd backend && npm install`
5. Set the start command: `cd backend && npm start`
6. Add environment variables
7. Click "Create Web Service"

### Step 3: Deploy Frontend

1. Click "New +" → "Static Site"
2. Connect your GitHub repository
3. Set build command: `cd frontend && npm install && npm run build`
4. Set publish directory: `frontend/build`
5. Click "Create Static Site"

### Step 4: Connect Frontend to Backend

In the frontend, update the API endpoint to your Render backend URL:
- Replace `http://localhost:5000` with your Render backend URL

## Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

### Frontend
Update proxy in `frontend/package.json`:
```json
"proxy": "http://localhost:5000"
```

For production, replace with your Render backend URL.

## Technologies Used

- **Backend**: Express.js, MongoDB, Mongoose, JWT, bcryptjs
- **Frontend**: React, Axios, React Router
- **Styling**: CSS3
- **Authentication**: JWT (JSON Web Tokens)
- **Database**: MongoDB Atlas

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

## Terminal Logs

When a user registers or logs in, you'll see:
```
✅ NEW USER REGISTERED!
Username: john_doe
Email: john@example.com
Time: 4/29/2026, 10:30:00 AM

✅ USER LOGGED IN!
Username: john_doe
Email: john@example.com
Time: 4/29/2026, 10:35:00 AM
```

## Troubleshooting

### MongoDB Connection Error
- Check your MongoDB URI in `.env`
- Ensure your IP is whitelisted in MongoDB Atlas

### CORS Error
- Make sure backend is running on `http://localhost:5000`
- Check CORS middleware in `backend/server.js`

### Port Already in Use
```bash
# Find process using port 5000
netstat -ano | findstr :5000
# Kill process
taskkill /PID <PID> /F
```

## License

MIT License

## Support

For issues and questions, please open an issue on GitHub.

---

**Enjoy building with MERN! 🚀**
