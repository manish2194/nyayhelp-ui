import React from 'react';
import styled from 'styled-components';
// import { FiMail, FiLock } from 'react-icons/fi'
import Button from './Common/Button';
import Select from './Common/Select';
import Input from './Common/Input';
import TextArea from './Common/TextArea';




const FormWrapper = styled.form`
    max-width: 1000px;
    margin: 80px auto;
    background-color: #f7f9fc;
    padding: 60px;
    border-radius: 15px;
    box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
`;







// const Button = styled.button`
//     padding: 20px 40px;
//     background-color: #007BFF;
//     color: #ffffff;
//     border: none;
//     font-size: 1.1rem;
//     transition: background-color 0.3s;

//     &:hover {
//         background-color: #0056b3;
//     }
// `;

// Implementing Icons (assuming you have an icon set imported like 'react-icons')
// This is just an example, you'd align the icon properly with the input
const InputIconWrapper = styled.div`
    display: flex;
    align-items: center;

    & > input {
        margin-left: 10px;
    }
`;
// const Input = styled.input`
//     width: 100%;
//     padding: 10px;
//     margin-bottom: 20px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
// `;

// const TextArea = styled.textarea`
//     width: 100%;
//     height: 150px;
//     padding: 10px;
//     margin-bottom: 20px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//     resize: vertical;
// `;

// const Select = styled.select`
//     width: 100%;
//     padding: 10px;
//     margin-bottom: 20px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
// `;

// const Button = styled.button`
//     padding: 10px 20px;
//     background-color: #007BFF;
//     color: white;
//     border: none;
//     border-radius: 4px;
//     cursor: pointer;
//     transition: background-color 0.3s;

//     &:hover {
//         background-color: #0056b3;
//     }
// `;

const NewQuestionForm = ({ onSubmit }) => {
    return (
        <FormWrapper onSubmit={onSubmit}>
            <Label htmlFor="title">Title</Label>
            <Input type="text" id="title" name="title" required />

            <Label htmlFor="description">Description</Label>
            <TextArea id="description" name="description" required />

            <Label htmlFor="category">Category</Label>
            <Select id="category" name="category">
                <option value="legal">Legal</option>
                <option value="financial">Financial</option>
                <option value="general">General</option>
                {/* Add more categories as needed */}
            </Select>

            <Button type="submit">Submit Question</Button>
        </FormWrapper>
    );
}

export default NewQuestionForm;
