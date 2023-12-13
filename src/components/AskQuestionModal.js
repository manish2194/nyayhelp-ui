// Modal Styles
import React from "react";
import styled from "styled-components";
import Button from "./Common/Button";
import Select from "./Common/Select";
import Input from "./Common/Input";
import TextArea from "./Common/TextArea";
const Heading = styled.h1`
    font-size: 2.5rem;
    color: #2c2c2c;
    margin-bottom: 50px;
    font-family: 'Lato', sans-serif;
`;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

const FormWrapper = styled.form`
  background-color: #f9fafc;
  padding: 10px 10px;
  border-radius: 10px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
`;

const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 1rem;
  color: #555;
  margin-bottom: 5px;
`;

const InputIconWrapper = styled.div`
  display: flex;
  align-items: center;

  & > input {
    margin-left: 10px;
  }
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 90%;
  height: fit-content;
  max-width: 500px; // Reducing the max width for a more elegant look.
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.12);
  padding: 10px;
  position: relative;
  z-index: 10;
  overflow-y: auto; // In case the content height exceeds the viewport height.
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888; // Slightly muted close icon

  &:hover {
    color: #555;
  }
`;

import { submitQuestion } from "../services/api/forum";

// Modal Component
function AskQuestionModal({ onClose, onSubmit }) {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category");

    const questionData = {
      title,
      description,
      category,
    };
    console.log("questionData", questionData);
    try {
      await submitQuestion(questionData);
      alert("Question submitted successfully");
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      onSubmit();
      // setModalOpen(false);
    }
  };


  return (
    <ModalOverlay>
      <ModalWrapper>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {/* <Heading>Ask a New Question</Heading> */}
        <FormWrapper onSubmit={handleSubmit}>
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" name="title" required />
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" name="description" required />
          <Label htmlFor="category">Category</Label>
          <Select id="category" name="category">
            <option value="legal">Legal</option>
            <option value="financial">Financial</option>
            <option value="general">General</option>
          </Select>
          <Button type="submit">Submit Question</Button>
        </FormWrapper>
      </ModalWrapper>
    </ModalOverlay>
  );
}

export default AskQuestionModal;
