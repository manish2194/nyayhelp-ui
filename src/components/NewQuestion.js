import React from 'react';
import NewQuestionForm from './NewQuestionForm';
import styled from 'styled-components';

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Heading = styled.h1`
    font-size: 2.5rem;
    color: #2c2c2c;
    margin-bottom: 50px;
    font-family: 'Lato', sans-serif;
`;

const NewQuestion = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const description = formData.get('description');
    const category = formData.get('category');

    const questionData = {
        title,
        description,
        category
    };

    try {
        const response = await fetch('YOUR_API_ENDPOINT_HERE', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // add any additional headers here
            },
            body: JSON.stringify(questionData)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // Handle successful submission: e.g., notify the user, redirect, etc.
        } else {
            const errorData = await response.json();
            console.error("There was a problem with the request:", errorData);
            // Handle errors: e.g., notify the user, log to an error tracking service, etc.
        }
    } catch (error) {
        console.error("Network error:", error);
        // Handle network errors, notify the user
    }
};

    return (
        <div>
            <PageWrapper>
            <Heading>Ask a New Question</Heading>
            <NewQuestionForm onSubmit={handleSubmit} />
        </PageWrapper>
        </div>
    );
}

export default NewQuestion;
