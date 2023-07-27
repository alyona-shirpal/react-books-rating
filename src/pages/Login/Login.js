import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import queries from '../../constants/graphql';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const [login, { loading, error }] = useMutation(queries.loginMutation);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: {
          email: email,
          password: password,
        },
      });

      if (data && data.login) {
        setLoginSuccess(true);
      }

      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  if (loginSuccess) {
    return (
      <div className="container mt-5">
        <h2>Login</h2>
        <p>Successfully logged in!</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {loading ? 'Logging in...' : 'Submit'}
        </button>
      </form>
      {error && <p>Error: {error.message}</p>}
      <p className="mt-3">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
