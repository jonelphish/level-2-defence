import React from 'react';
import './login.css';

export default function Login() {
  const handleRegisterRedirect = () => {
    window.location.href = 'Register';
  };

  const handleLogin = () => {
    // Perform login logic here, e.g., validating credentials
    // Once logged in, redirect to the home page
    window.location.href = 'home'; // Redirect to the home page
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton" onClick={handleLogin}>Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={handleRegisterRedirect}>
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
