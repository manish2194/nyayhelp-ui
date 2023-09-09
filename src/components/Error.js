import React from "react";
import styled from "styled-components";
import { useRouteError } from "react-router-dom";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  background-color: #f5f5f5;
`;

const ErrorText = styled.p`
  font-size: 18px;
  color: #ff0000;
  margin-bottom: 10px;
`;

const Error = ({ message }) => {
  const err_message = message || useRouteError();
  return (
    <ErrorContainer>
      <ErrorText>{err_message}</ErrorText>
    </ErrorContainer>
  );
};

export default Error;
