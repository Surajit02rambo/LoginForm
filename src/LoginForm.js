import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!isChecked) {
      setShowError(true);
      return;
    }

    // Pass the credentials as URL parameters
    const queryParams = new URLSearchParams({ username, password, email }).toString();
    const url = `/credentials?${queryParams}`;
    window.location.href = url;
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setShowError(false);
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
          required
        />
      </label>
      <br />
      <label>
        <h4 className='pswd'>PASSWORD</h4>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <h4>CONFIRM PASSWORD</h4>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <h4>EMAIL</h4>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        I agree to the terms and conditions
      </label>
      {showError && (
        <div style={{ color: 'red' }}>Please agree to the terms and conditions.</div>
      )}
      <br />
      <button type="submit" disabled={!isChecked}>
        SUBMIT
      </button>
    </form>
  );
};

export default LoginForm;
