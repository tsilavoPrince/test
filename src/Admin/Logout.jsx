import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate(); // Hook pour rediriger l'utilisateur

  useEffect(() => {
    // Supprimer le token de localStorage
    localStorage.removeItem('token');
    
    // Rediriger l'utilisateur vers la page de login
    navigate('/Login');
  }, [navigate]);

  return <div>Déconnexion en cours...</div>;
};

export default Logout;
