import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'Tester' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      alert('User registered successfully');
    } catch (err) {
      alert('Registration failed');
    }
  };
// After successful registration
onRegisterSuccess(); // passed from App.jsx
navigate('/');

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <input className="form-control mb-3" placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="form-control mb-3" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="form-control mb-3" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
        <select className="form-control mb-3" onChange={e => setForm({ ...form, role: e.target.value })}>
          <option value="Tester">Tester</option>
          <option value="Developer">Developer</option>
          <option value="Admin">Admin</option>
        </select>
        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;

