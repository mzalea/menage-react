import React, { useState } from 'react';

const Register = () => {

  const [display_name, setDisplayname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ display_name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const user = await response.json();
      console.log(user);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-container">

      <form className="register-form" onSubmit={handleSubmit}>

        <div className="form-body">
          <div className="email">
            <label className="form_label" htmlFor="email">Primary Email</label>
            <input
              className="form_input"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="user-name">
            <label className="form_label" htmlFor="name">Display Name</label>
            <input
              className="form_input"
              type="text"
              id="name"
              placeholder="Display Name"
              value={display_name}
              onChange={(e) => setDisplayname(e.target.value)}
            />
          </div>
          <div className="password">
            <label className="form_label" htmlFor="password">Password</label>
            <input
              className="form_input"
              type="password"
              id="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="password-confirm">
            <label className="form_label" htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="form_input"
              type="password"
              id="confirmPassword"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>
        
        <div className="form-footer">
          <button type="submit" className="btn">Register</button>
        </div>

      </form>

    </div>
  );
}

export default Register;