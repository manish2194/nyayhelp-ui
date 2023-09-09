import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import './index.css';
import SideNavBar from "./components/SideNavBar";

import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";

import { setupAxiosInterceptors } from "./utils/axiosInterceptor";
import Blog from "./components/Blog";
import Forum from "./components/Forum";
import NewQuestion from "./components/NewQuestion";
import Login from "./components/Login";
import CreateBlog from "./components/CreateBlog";
import BlogPage from "./components/BlogPage";
import Register from "./components/Register";

import GoogleLogin from "./components/google-auth";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding-top: 50px
`;

const OutletContainer = styled.div`
  width: 100%;
`;


const isUserAuthenticated = () => {
  const authenticatedCookie = document.cookie.includes('auth_token');
  console.log("isUserAuthenticated", authenticatedCookie);
  return true || authenticatedCookie;
};

const navigateToLogin = () => {
  const navigate = useNavigate();
  navigate('/login');
}



const App = (isAuthenticated) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const history = useHistory();

  // Call the setupAxiosInterceptors function on initial mount to set up the interceptor
  React.useEffect(() => {
    const interceptorId = setupAxiosInterceptors(navigate);

    // Clean up the interceptor when the component unmounts
    return () => {
      axios.interceptors.response.eject(interceptorId);
    };
  }, [history]);

  React.useEffect(() => {
    console.log('Route changed:', location.pathname);
    if (!isUserAuthenticated() && !location.pathname.includes('login')) {
      console.log("navigating..");
      navigate('/login'); // Redirect to the login page
      return;
    }
    else if (location.pathname == '/') {
      console.log('Route changed:', location.pathname);
      console.log("not navigating");
      navigate('/')
    }
  }, [location.pathname]);

  // console.log("is")




  return (
    <div className="app">
     <Header />
      <Container>
        {/* <SideNavBar /> */}
        <OutletContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/oauth" element={<GoogleLogin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/forum/new-question" element={<NewQuestion/>} />
            <Route path="/blog/create" element={<CreateBlog/>} />
            <Route path="/blog/page" element={<BlogPage/>} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </OutletContainer>
      </Container>
    </div>
  );
};

// const AppLayoutWithRouter = withRouter(AppLayout);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      {/* {isAuthenticated ? <App /> : navigateToLogin()} */}
    </Router>
  </React.StrictMode>
);

