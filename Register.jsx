import React, { useState } from 'react';
import './register.css';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const handleSignUp = () => {
    if (!username || !email || !password || !passwordAgain) {
      alert("Please fill in all the fields");
      return;
    }

    if (password !== passwordAgain) {
      alert("Passwords do not match");
      return;
    }

    // Save user information to localStorage
    const user = { username, email, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert("User registered successfully!");
  };

  const handleLoginRedirect = () => {
    window.location.href = 'login'; 
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Socialink</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Socialink.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              className="loginInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Email"
              className="loginInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password Again"
              className="loginInput"
              value={passwordAgain}
              onChange={(e) => setPasswordAgain(e.target.value)}
            />
            <button className="loginButton" onClick={handleSignUp}>
              Sign Up
            </button>
            <button className="loginRegisterButton" onClick={handleLoginRedirect}>
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
