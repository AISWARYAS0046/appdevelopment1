import React, { useState } from 'react';
import "./login.css";
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = (e) => {
    e.preventDefault();

    // Basic authentication logic (you can replace this with your actual authentication)
    if (username === 'yourUsername' && password === 'yourPassword') {
      // Successful authentication, you can redirect or perform other actions here
      alert('Authentication successful');
    } else {
      alert('Authentication failed');
    }
  };

  return (
    <div id="body">
      <div className="content">
        <div className="signup-form">
          <div className="container">
            <div className="header">
              <h1>Login</h1>
              <p>Enter your credentials to log in</p>
            </div>
            <form>
              <div className="input">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="input">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <button className="signup-btn" onClick={authenticate}>
                LOGIN
              </button>
            </form>
            <Link to="/register">
              <p>No account? Sign up here</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
