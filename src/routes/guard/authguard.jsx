import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';

const RouteGuard = ({ path,children }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  // Check if the user is logged in, if not, redirect to the login page
  if (!isLoggedIn) {
    // Redirect to the login page or any other page you want to use for authentication
    navigate('/signup');
    return null; // Return null to prevent rendering the protected component
  }

  // If the user is logged in, render the protected component
//   return <>{children}</>;
    return <Route path={path} element={children} />;
};

export default RouteGuard;
