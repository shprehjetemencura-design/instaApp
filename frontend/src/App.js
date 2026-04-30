import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Post from './pages/Post';
import './App.css';
// ✅ SAFE PARSE FUNCTION (GLOBAL)
const safeParse = (data) => {
  try {
    return data && data !== "undefined" ? JSON.parse(data) : null;
  } catch {
    return null;
  }
};
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const token = localStorage.getItem('token');
  const userData = localStorage.getItem('user');

  if (token && userData) {
    setUser(safeParse(userData));
  }

  setLoading(false);
}, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/post" /> : <Login setUser={setUser} />} />
        <Route path="/post" element={user ? <Post user={user} setUser={setUser} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
