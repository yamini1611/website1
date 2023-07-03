import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { fakeAuth } from './Authorization';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={fakeAuth.isAuthenticated ? (
        <Component />
      ) : (
        <Navigate to="/signin" replace />
      )}
    />
  );
};

export default ProtectedRoute;

