// pages/Forum.js
import React, {useState} from 'react';
import Button from './Common/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AskQuestionModal from './AskQuestionModal'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  background: linear-gradient(135deg, #f5f7fa, #ffffff);

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const FiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchIcon = styled.i`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;

const SearchBox = styled.input`
  width: 100%;
  padding: 12px 10px 12px 50px;  
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  
  &:focus {
    border-color: #007BFF;
    box-shadow: 0 0 12px rgba(0, 123, 255, 0.2);
    outline: none;
  }
`;





const QuestionList = styled.div`
  margin-top: 20px;
`;

const QuestionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`;


const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
  border: 2px solid #007BFF;  // Give avatar a border
`;


const QuestionContent = styled.div`
  flex: 1;
`;

const QuestionTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
`;


const  Forum = () =>  {
  const [isModalOpen, setModalOpen] = useState(false);
  const onClick = () => {
    setModalOpen(!isModalOpen)
  }

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

    console.log('questionData', questionData)

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
    <>
    <Container>
      <FiltersWrapper>
      <SearchWrapper>
  <SearchIcon className="fas fa-search" />
  <SearchBox placeholder="Search questions..." />
</SearchWrapper>
        <Button onClick={onClick}>Post a Question</Button>
      </FiltersWrapper>

      <QuestionList>
        <QuestionItem>
        <Avatar src="https://via.placeholder.com/50" alt="User Avatar" />

          <QuestionContent>
            <QuestionTitle>
              <Link to="/forum/questions/1">What are the rights of a tenant in California?</Link>
            </QuestionTitle>
            <p>Posted by JohnDoe 2 hours ago | 5 answers</p>
          </QuestionContent>
        </QuestionItem>

        <QuestionItem>
        <Avatar src="https://via.placeholder.com/50" alt="User Avatar" />

          <QuestionContent>
            <QuestionTitle>
              <Link to="/forum/questions/2">How do I create a will?</Link>
            </QuestionTitle>
            <p>Posted by JaneSmith 5 hours ago | 3 answers</p>
          </QuestionContent>
        </QuestionItem>

        {/* ... Render more questions */}
      </QuestionList>
      
    </Container>
    <div>
     {isModalOpen && <AskQuestionModal onClose= {onClick} onSubmit= {handleSubmit}/>}
     </div>
    </>
    
  );
}

export default Forum;
