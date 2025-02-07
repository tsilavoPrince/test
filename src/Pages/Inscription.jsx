import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const bootstrapCSS = document.createElement('link');
bootstrapCSS.rel = 'stylesheet';
bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css';
document.head.appendChild(bootstrapCSS);
const Login = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://test2-cnd2.onrender.com/api/register', formData);
      setMessage('Registration successful!');
      setError('');
    } catch (err) {
      setError(err.response.data.message || 'Something went wrong');
      setMessage('');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful!');
      setError('');
    } catch (err) {
      setError(err.response.data.message || 'Invalid credentials');
      setMessage('');
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row w-75 shadow-lg">
        <div className="col-md-6 p-0">
          <img
            src="/path/to/your/image.jpg"
            alt="Collection 2018"
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6 bg-white p-5">
          <h2 className="text-center mb-4">REGISTRATION FORM</h2>
          <form onSubmit={handleRegister}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="first_name"
                  className="form-control"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  name="last_name"
                  className="form-control"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password_confirmation"
                className="form-control"
                placeholder="Confirm Password"
                value={formData.password_confirmation}
                onChange={handleChange}
                required
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            {message && <div className="alert alert-success">{message}</div>}
            <div className="d-grid">
              <button type="submit" className="btn btn-dark">
                Register →
              </button>
            </div><br></br>
            <div className="d-grid">
              <button type="submit" className="btn btn-danger">
                <Link to="/Admin">
                  <button className="btn btn-danger">Annuler</button>
                </Link>
              </button>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
};

export default Login;
