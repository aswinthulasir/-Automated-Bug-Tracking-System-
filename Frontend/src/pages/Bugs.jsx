import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bugs = () => {
  const [bugs, setBugs] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    severity: 'Medium',
    priority: 'Medium',
    status: 'Open',
    createdBy: '',
    assignedTo: ''
  });

  const fetchBugs = async () => {
    const res = await axios.get('http://localhost:5000/api/bugs');
    setBugs(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/bugs', form);
    fetchBugs();
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Bug Dashboard</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 mb-4 rounded bg-light">
        <input className="form-control mb-2" placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
        <textarea className="form-control mb-2" placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })}></textarea>
        <select className="form-control mb-2" onChange={e => setForm({ ...form, severity: e.target.value })}>
          <option>Low</option><option>Medium</option><option>High</option>
        </select>
        <select className="form-control mb-2" onChange={e => setForm({ ...form, priority: e.target.value })}>
          <option>Low</option><option>Medium</option><option>High</option>
        </select>
        <input className="form-control mb-2" placeholder="Created By" onChange={e => setForm({ ...form, createdBy: e.target.value })} />
        <input className="form-control mb-2" placeholder="Assigned To" onChange={e => setForm({ ...form, assignedTo: e.target.value })} />
        <button className="btn btn-primary w-100">Submit Bug</button>
      </form>

      <ul className="list-group">
        {bugs.map((bug, index) => (
          <li key={index} className="list-group-item">
            <strong>{bug.title}</strong><br />
            {bug.description}<br />
            <small>Status: {bug.status} | Severity: {bug.severity} | Priority: {bug.priority}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bugs;
