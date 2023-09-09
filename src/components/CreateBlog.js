import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RichTextEditor from './Common/RichTextEditor'

const FormWrapper = styled.form`
  background-color: #f7f9fc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #0077cc;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005fa3;
  }
`;

function CreateBlog({  }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageFile: null,
    tag: 'General',
    content: ""
  });

  const [updateContent, setUpdateContent] = useState("");

  // const handleContentSave = (content) => {
  //   setFormData(prevData => ({ ...prevData, content }));
  // };

  const handleContentChange = (content) => {
    console.log("content", content)
    setUpdateContent(content)
  };


async function handleSubmit(e) {
  e.preventDefault();
  const url = 'https://api.example.com/blogs';

  // Creating FormData to hold and send form data
  const data = new FormData();
  data.append('title', formData.title);
  data.append('description', formData.description);
  data.append('tag', formData.tag);
  data.append('content', updateContent);

  
  
  if (formData.imageFile) {
    data.append('image', formData.imageFile);
  }

  try {
    const response = await axios.post(url, data);

    alert('Blog successfully saved!');
    // Optionally, you can clear the form, navigate to another page, or perform other actions upon successful request.

  } catch (error) {
    console.error("There was an error while saving the blog:", error);
    alert('There was a problem saving your blog. Please try again later.');
  }
}


  const handleChange = (e) => {
    if (e.target.name === 'imageFile') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0]
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(formData);
  // };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Label htmlFor="title">Title:</Label>
      <Input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <Label htmlFor="description">Description:</Label>
      
      <Input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <Label htmlFor="content">Content:</Label>
     <RichTextEditor value={formData.content} onChange={handleContentChange} />

      <Label htmlFor="imageFile">Select Image:</Label>
      <Input
        type="file"
        id="imageFile"
        name="imageFile"
        accept="image/*"
        onChange={handleChange}
      />

      <Label htmlFor="tag">Tag:</Label>
      <Select id="tag" name="tag" value={formData.tag} onChange={handleChange}>
        <option value="General">General</option>
        <option value="Legal">Legal</option>
        <option value="Technology">Technology</option>
        <option value="Finance">Finance</option>
      </Select>

      <SubmitButton type="submit">Create Blog</SubmitButton>
    </FormWrapper>
  );
}

export default CreateBlog;
