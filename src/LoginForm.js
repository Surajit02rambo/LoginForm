import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the credentials as URL parameters
    const queryParams = new URLSearchParams({ username, password, email }).toString();
    const url = `/credentials?${queryParams}`;
    window.location.href = url;
  };

  return (
    <form onSubmit={handleSubmit}>
    <pre>Login To Stay Connected!</pre>
      <label>
       <h4>USERNAME</h4>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
      <h4 className='pswd'>PASSWORD</h4>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        <h4>EMAIL</h4>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default LoginForm;
