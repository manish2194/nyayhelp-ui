import React from 'react';
import styled from 'styled-components';
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
