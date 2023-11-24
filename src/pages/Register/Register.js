import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import queries from '../../constants/graphql';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registerSuccess, setRegisterSuccess] = useState(false);

  const [register, { loading, error }] = useMutation(queries.registerMutation);

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await register({
        variables: {
          username,
          email,
          password
        }
      });

      if (data && data.createUser) {
        setRegisterSuccess(true);
      }

      setUsername('');
      setEmail('');
      setPassword('');
    } catch (e) {
      // eslint-disable-next-line no-undef
      console.log(e);
    }
  };

  if (registerSuccess) {
    return (
      <div className="container mt-5">
        <p>Successfully registered!</p>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={handleUserNameChange}
            placeholder="Enter username"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {loading ? 'Logging in...' : 'Submit'}
        </button>
      </form>
      {error && <p>Error: {error.message}</p>}
      <p className="mt-3">
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};
export default Register;
