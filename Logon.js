import React, { useState } from 'react';
import './Logon.css';

export default function Logon() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Replace with your authentication logic
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="log-in-register-page clip-contents">
      <div className="group-6102">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/w7cx8rsdwyl-28%3A141?alt=media&token=f3463d8d-bb16-4b8a-901f-0bdb689a5021"
          alt="Not Found"
          className="image-5"
        />
        <form className="form-log-in" onSubmit={handleLogin}>
          <div className="input-field">
            <p className="label">Username</p>
            <div className="input clip-contents">
              <input
                type="text"
                className="value"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
          </div>
          <div className="input-field-1">
            <p className="label-1">Password</p>
            <div className="input-2 clip-contents">
              <input
                type="password"
                className="value-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
          </div>
          <div className="button-group">
            <button type="submit" className="button-1 clip-contents">
              <p className="button">Log In</p>
            </button>
          </div>
          {error && <p className="error">{error}</p>}
          <div className="text-link-1">
            <p className="text-link">Forgot password?</p>
          </div>
        </form>
      </div>
    </div>
  );
}


// function loadScript(src) {
//   const script = document.createElement('script');
//   script.src = src;
//   document.elementFromPoint.prepend(script);
// }


// loadScript("LoggingPage2.js");