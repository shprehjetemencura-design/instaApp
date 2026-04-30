import React, { useState } from 'react';
import axios from '../api/axios';
import './Login.css';

function Login({ setUser }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    usernameOrEmailOrPhone: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('/api/login', {
        usernameOrEmailOrPhone: formData.usernameOrEmailOrPhone,
        password: formData.password
      });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      setUser(response.data.user);
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-box">
          <div className="instagram-logo">
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='100%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' style='stop-color:%23feda75;stop-opacity:1' /%3E%3Cstop offset='5%25' style='stop-color:%23fa7e1e;stop-opacity:1' /%3E%3Cstop offset='45%25' style='stop-color:%23d92e7f;stop-opacity:1' /%3E%3Cstop offset='60%25' style='stop-color:%239b36b7;stop-opacity:1' /%3E%3Cstop offset='90%25' style='stop-color:%23515bd4;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100' height='100' rx='20' fill='url(%23grad)'/%3E%3Cg transform='translate(50 50)'%3E%3Crect x='-22' y='-22' width='44' height='44' rx='8' fill='none' stroke='white' stroke-width='2.5'/%3E%3Ccircle cx='0' cy='0' r='12' fill='none' stroke='white' stroke-width='2.5'/%3E%3Ccircle cx='15' cy='-15' r='2.5' fill='white'/%3E%3C/g%3E%3C/svg%3E" 
              alt="Instagram"
              className="instagram-icon"
            />
            <h1>Instagram</h1>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="text"
              name="usernameOrEmailOrPhone"
              placeholder="Username, email or mobile phone"
              value={formData.usernameOrEmailOrPhone}
              onChange={handleChange}
              required
              autoComplete="username"
              className="form-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
              className="form-input"
            />

            {error && (
              <div className="error-message">
                <strong>Error:</strong> {error}
                {error.includes('not found') && (
                  <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.8 }}>
                    💡 Tip: Make sure you have registered first or use the correct username/email
                  </div>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="login-button"
            >
              {loading ? 'Loading...' : 'Log in'}
            </button>
          </form>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="login-footer">
            <p style={{ fontSize: '13px', color: '#999' }}>
              💡 Enter any username and password to create an account automatically
            </p>
          </div>
        </div>

        <div className="login-image">
          <img src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/d6bf0c928b5a.png" alt="Instagram" />
        </div>
      </div>
    </div>
  );
}

export default Login;
