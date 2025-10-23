import React, { useState, useEffect } from 'react';

// ✅ Use environment variable for API base URL
const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    fathername: '',
    mobilenumber: '',
    rollnumber: '',
    reason: '',
    date: '',
    time: '',
  });

  const [outpasses, setOutpasses] = useState([]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/outpass`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      const data = await response.json();
      console.log('Form Submitted:', data);

      // ✅ Reset form
      setFormData({
        name: '',
        fathername: '',
        mobilenumber: '',
        rollnumber: '',
        reason: '',
        date: '',
        time: '',
      });

      // ✅ Refresh list
      fetchOutpasses();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // ✅ Fetch all outpasses
  const fetchOutpasses = async () => {
    try {
      const response = await fetch(`${API_URL}/outpass/all`);
      if (!response.ok) throw new Error('Failed to fetch outpasses');

      const data = await response.json();
      setOutpasses(data);
    } catch (error) {
      console.error('Error fetching outpasses:', error);
    }
  };

  // ✅ Fetch data on mount
  useEffect(() => {
    fetchOutpasses();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Out Pass Application</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Your Name:</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Father Name:</label>
          <input
            type="text"
            name="fathername"
            required
            value={formData.fathername}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Mobile Number:</label>
          <input
            type="tel"
            name="mobilenumber"
            pattern="[0-9]{10}"
            required
            value={formData.mobilenumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Roll Number:</label>
          <input
            type="text"
            name="rollnumber"
            required
            value={formData.rollnumber}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Reason:</label>
          <input
            type="text"
            name="reason"
            required
            value={formData.reason}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            required
            value={formData.time}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <h2>All Outpasses</h2>
      <ul>
        {outpasses.length === 0 ? (
          <p>No outpasses found.</p>
        ) : (
          outpasses.map((o, index) => (
            <li key={o.id || index}>
              <strong>{o.name}</strong> ({o.rollnumber}) — {o.reason} on{' '}
              {o.date} at {o.time}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
