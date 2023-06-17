import React from 'react';
import { useLocation } from 'react-router-dom';

const CredentialsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');
  const password = searchParams.get('password');
  const email = searchParams.get('email');
  return (
    <div className='dashboard'>
      <div className='check'></div>
      <h2>Logged In Successfully!</h2>
      <pre>Welcome To Dashboard</pre>
      <div className='credentials'>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
      <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default CredentialsPage;
