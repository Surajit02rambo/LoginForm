import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const CredentialsPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const username = searchParams.get('username');
  const password = searchParams.get('password');
  const email = searchParams.get('email');

  useEffect(() => {
    // Redirect to LoginForm page when the component mounts
    const timer = setTimeout(() => {
      history.push('/');
    }, 3000); // Redirect after 3 seconds

    return () => {
      clearTimeout(timer);
    };
  }, []);

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
