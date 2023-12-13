// Login.js
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../utils/axiosInterceptor";
import styled from "styled-components";
import { config } from "../config";

import { useDispatch } from "react-redux";
import { login } from "../reducer/userReducer";

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 10px;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginForm = styled.form`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoginPage = styled.div`
  height: 100%;
  overflow: hidden;
`;

const Login = () => {
  console.log("tttttttthishdishds");
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Simulate a login process
    const userData = { id: 1, username: "example_user" };
    dispatch(login(userData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        `${config.API_URL}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (resp) {
        console.log("Response on login", resp);
        const userData = resp?.data?.user;
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", resp?.data?.token);
        dispatch(login(userData));

        // setAuthToken(resp);
      } else {
        throw new Error("Bad credentials");
      }

      navigate("/home");
    } catch (err) {
      console.log("Error while logging in", err);
      setError("Error while logging in. Please try again."); // Set the error message
      e.preventDefault();
    }
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <LoginPage>
      <LoginContainer>
        <LoginForm onSubmit={handleSubmit}>
          <Title>Login</Title>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit">Login</Button>
            <Button onClick={navigateToRegister}>Register</Button>
          </FormGroup>
          {error && <ErrorMessage>{error}</ErrorMessage>}{" "}
          {/* Display error message if 'error' is not empty */}
        </LoginForm>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
