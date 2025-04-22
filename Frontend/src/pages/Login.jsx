import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      alert('Logged in as ' + res.data.role);
      window.location.href = '/bugs';
    } catch (err) {
      alert('Login failed');
    }
  };
// After successful login
onLoginSuccess(); // passed from App.jsx
navigate('/bugs');

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <input className="form-control mb-3" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="form-control mb-3" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
