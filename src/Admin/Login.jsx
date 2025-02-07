import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate
import axios from 'axios';
import { Navigate } from 'react-router-dom';

import { Link } from 'react-router-dom';




const Login = () => {
  useEffect(() => {
    // Charger dynamiquement le CSS de Bootstrap
    const bootstrapCSS = document.createElement('link');
    bootstrapCSS.rel = 'stylesheet';
    bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapCSS);

    return () => {
      // Nettoyer le CSS Bootstrap au démontage du composant
      document.head.removeChild(bootstrapCSS);
    };

  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialiser useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://test2-cnd2.onrender.com/api/login', {
        email,
        password,
      });

      if (response.data.token) {
        // Stocker le token dans localStorage
        localStorage.setItem('token', response.data.token);

        // Rediriger vers la page Support
        navigate('/Admin');
      }
    } catch (err) {
      setError('Identifiants incorrects');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '25rem' }}>
        <h2 className="text-center mb-4">Connexion</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Se connecter
            </button>
          </div>
          <br></br>
          <div className="d-grid">
            <button type="submit" className="btn btn-danger">
              <Link to="/FaQ">
                <button className="btn btn-danger">Annuler</button>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
