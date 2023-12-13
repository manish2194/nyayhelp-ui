// import React from 'react';
// import { useSelector } from 'react-redux';
// import {  useNavigate } from 'react-router-dom';

// const UnAuthGuard = (WrappedComponent) => {
//   const user = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   console.log("user", user);

//   return (
//     <>
//     { !user && <WrappedComponent />}
//     {/* { user && navigate('/')} */}
//     </>
//   )
// };
// export default UnAuthGuard;

import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const UnAuthGuard = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user);

  return !isAuthenticated ? (
    // If the user is authenticated, render the protected content
    children
  ) : (
    // If the user is not authenticated, redirect to the login page
    <Navigate to="/" replace />
  );
};

export default UnAuthGuard;
