// Login.js

import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Navigate } from "react-router-dom";
const EMAIL_REGEX = "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])";
import { config } from "../config";

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-top: 10px;
`;

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const RegisterForm = styled.form`
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

const RegisterPage = styled.div`
  height: 100%;
  overflow: hidden;
`;

const Register = () => {
  const regex = new RegExp(EMAIL_REGEX);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [confirm_password, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleFormChange = (e) => {
    formData[e.target.id] = e.target.value;
    setFormData({ ...formData });
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      if(!regex.test(formData.email)){
        throw new Error("Invalid email address");
      }
      if (confirm_password !== formData.password) {
        throw new Error("Password mismatch");
      }
      if (formData.password.length < 6)  {
        throw new Error("Password should be minimum of 6 character");
      }
      const resp = await axios.post(`${config.API_URL}/register`, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("response", resp)
      

    } catch (err) {
      console.log("Error while logging in", err);
      setError(err.message || "Error while logging in. Please try again.");
      e.preventDefault();
    }
  };

  return (
    <RegisterPage>
      <RegisterContainer>
        <RegisterForm>
          <Title>Register</Title>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleFormChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              type="password"
              id="confirm-password"
              value={confirm_password}
              onChange={handleConfirmPassword}
              required
            />
          </FormGroup>
          <FormGroup>
            <Button onClick={handleRegister}>Register</Button>
          </FormGroup>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </RegisterForm>
      </RegisterContainer>
    </RegisterPage>
  );
};

export default Register;
