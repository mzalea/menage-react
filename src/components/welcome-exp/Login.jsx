import React, { useState } from 'react';

const Login = () => {

  const [email, setEmail,] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="form-body">
        <div className="email">
          <label className="form_label" htmlFor="email">Enter Email</label>
          <input
            className="form_input"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label className="form_label" htmlFor="password">Enter Password</label>
          <input
            className="form_input"
            type="password"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="form-footer">
        <button type="submit" className="btn">login</button>
      </div>
    </form>
  );
}

export default Login;