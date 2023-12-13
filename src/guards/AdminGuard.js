import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = ({ children, roles = [] }) => {
  let user = useSelector((state) => state.user);
  let isAuthenticated = user && user.role === "ADMIN";
  return isAuthenticated ? (
    // If the user is authenticated, render the protected content
    children
  ) : (
    // If the user is not authenticated, redirect to the login page
    <Navigate to="/" replace />
  );
};

export default AuthGuard;
