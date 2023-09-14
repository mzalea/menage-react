import React, { useState } from 'react';

export const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Registration submitted for ${name} ${email}`);
  }

  return (
    <div className="register-container">

      <form className="register-form" onSubmit={handleSubmit}>

        <div className="form-body">
          <div className="family-name">
            <label className="form_label" for="name">Family Name</label>
            <input
              className="form_input"
              type="text"
              id="name"
              placeholder="Family Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="email">
            <label className="form_label" for="email">Primary Email</label>
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
            <label className="form_label" for="password">Password</label>
            <input
              className="form_input"
              type="password"
              id="password"
              placeholder="********"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="password-confirm">
            <label className="form_label" for="confirmPassword">Confirm Password</label>
            <input
              className="form_input"
              type="password"
              id="confirmPassword"
              placeholder="********"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>
        </div>
        
        <div class="form-footer">
          <button type="submit" class="btn">Register</button>
        </div>

      </form>

    </div>
  );
}
