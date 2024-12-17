import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Vérifiez si le token est présent

  // Si le token existe, autoriser l'accès au composant enfant, sinon rediriger vers /login
  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
