// // import React, { useEffect } from 'react';

// // const AuthGuard = ({component}) => {
// //     useEffect(() => {
// //         console.log("Auth Guard");
// //     }, [component]);

// //     return <component/>
// // }

// // export default AuthGuard;

// import React from "react";
// import { useSelector } from "react-redux";
// // import {  useNavigate } from 'react-router-dom';
// // import { Redirect } from 'react-router-dom';

// import { useNavigate } from "react-router-dom";

// // import { Redirect } from 'react-router-dom';

// const AuthGuard = (WrappedComponent) => {
//   const user = useSelector((state) => state.user);
//   const navigate = useNavigate();
//   console.log("user", user);
//   if (!user) {
//     navigate("/login");
//   }

//   if (user) {
//     return <WrappedComponent />;
//   } else {
//     navigate("/login", { replace: true }); // Redirect to the login page if not authenticated
//     return null; // Return null to prevent rendering unauthorized content
//   }

//   // return (
//   //   <>
//   //   { user && <WrappedComponent />}
//   //   {/* { !user && navigate('/')} */}
//   //   { !user && <Redirect to="/login" />}
//   //   </>
//   // )
// };

// export default AuthGuard;

import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthGuard = ({ children, roles = [] }) => {
  let user = useSelector((state) => state.user);
  let isAuthenticated = !!user;
  if (roles.length && roles.indexOf(user.role) == -1) isAuthenticated = false;
  return isAuthenticated ? (
    // If the user is authenticated, render the protected content
    children
  ) : (
    // If the user is not authenticated, redirect to the login page
    <Navigate to="/login" replace />
  );
};

export default AuthGuard;
