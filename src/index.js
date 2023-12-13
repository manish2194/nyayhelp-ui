import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";
// import axios from "axios";
import "./index.css";
// import SideNavBar from "./components/SideNavBar";

import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";

// import { setupAxiosInterceptors } from "./utils/axiosInterceptor";
import Blog from "./components/Blog";
import Forum from "./components/Forum";
import NewQuestion from "./components/NewQuestion";
import Login from "./components/Login";
import CreateBlog from "./components/CreateBlog";
import BlogPage from "./components/BlogPage";
import Register from "./components/Register";
import ForumPage from "./components/ForumPage";

import GoogleLogin from "./components/google-auth";
import QuickLink from "./components/QuickLink";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./reducer/userReducer";

// import AuthGuard from "./guards/AuthGuard";
// import UnAuthGuard from "./guards/UnAuthGuard";

import { useDispatch } from "react-redux";
import { login } from "./reducer/userReducer";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 10px;
`;
const QuickLinkContainer = styled.div`
  // background: #fdf0dd4a;
  display: flex;
  margin-top: 80px;
  flex-direction: column;
  align-items: center;
`;

const OutletContainer = styled.div`
  width: 100%;
`;

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const AuthGuard = React.lazy(() => import("./guards/AuthGuard"));
const UnAuthGuard = React.lazy(() => import("./guards/UnAuthGuard"));
const AdminGuard = React.lazy(() => import("./guards/AdminGuard"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      dispatch(login(JSON.parse(userData)));
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <QuickLinkContainer>
        <QuickLink />
      </QuickLinkContainer>

      <Container>
        {/* <SideNavBar /> */}
        <OutletContainer>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/oauth" element={<GoogleLogin />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route
              path="/login"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <UnAuthGuard>
                    <Login />
                  </UnAuthGuard>
                </React.Suspense>
              }
            />

            <Route
              path="/register"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <UnAuthGuard>
                    <Register />
                  </UnAuthGuard>
                </React.Suspense>
              }
            />
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/about" element={<About />} />
            {/* <Route
              path="/blog"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <AuthGuard>
                    <Blog />
                  </AuthGuard>
                </React.Suspense>
              }
            /> */}
            {/* <Route path="/blog" element={AuthGuard(Blog)} /> */}

            <Route path="/blog" element={<Blog />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/forum/new-question" element={<NewQuestion />} />
            <Route
              path="/blog/create"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <AdminGuard>
                    <CreateBlog />
                  </AdminGuard>
                </React.Suspense>
              }
            />
            {/* <Route path="/blog/create" element={<CreateBlog />} /> */}
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/forum/:id" element={<ForumPage />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </OutletContainer>
      </Container>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
      {/* {isAuthenticated ? <App /> : navigateToLogin()} */}
    </Router>
  </React.StrictMode>
);
