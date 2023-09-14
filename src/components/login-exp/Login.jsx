import React, { useState } from 'react';

export const Login = () => {

  const [email, setEmail,] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);    
  }

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
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
      </div>
      <div className="form-footer">
        <button type="submit" className="btn">login</button>
      </div>
    </form>
  );
}
