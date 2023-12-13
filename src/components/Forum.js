import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getAllQuestions } from "../services/api/forum";
import Button from "./Common/Button";
import AskQuestionModal from "./AskQuestionModal";
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  // background: linear-gradient(135deg, #f5f7fa, #ffffff);

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

const QuestionList = styled.div`
  // margin-top: 20px;
`;

const QuestionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
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
  border: 2px solid #007bff; // Give avatar a border
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

const DiscussionTopics = styled.div`
  padding: 10px;
  border-radius: 5px;
`;

const DiscussionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

function Forum({ isHomePage = false }) {
  const [isModalOpen, setModalOpen] = useState(false);

  let [questionList, setQuestionList] = useState([]);
  const navigate = useNavigate();

  const getQuestions = async () => {
    const questions = await getAllQuestions();
    setQuestionList(questions.question);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const handleSubmit = async (e) => {
    setModalOpen(false);
  };

  const handleCardClick = (postId) => {
    navigate(`/forum/${postId}`);
  };

  const onClick = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <Container>
        {!isHomePage && (
          <FiltersWrapper>
            <Button onClick={onClick}>Post a Question</Button>
          </FiltersWrapper>
        )}
        <QuestionList>
          <DiscussionTopics>
            <DiscussionTitle>Discussion Topics</DiscussionTitle>
          </DiscussionTopics>
          {questionList.map((qList) => (
            <div key={qList._id} onClick={() => handleCardClick(qList._id)}>
              <QuestionItem>
                {!isHomePage && (
                  <Avatar
                    src="https://via.placeholder.com/50"
                    alt="User Avatar"
                  />
                )}
                <QuestionContent>
                  <QuestionTitle>
                    <Link to="/forum/questions/1">{qList.title}</Link>
                  </QuestionTitle>
                  <p>
                    Posted by {qList.user.user_name}{" "}
                    {new Date(qList.createdAt).toLocaleDateString()} |{" "}
                    {qList.total_comments} answers
                  </p>
                </QuestionContent>
              </QuestionItem>
            </div>
          ))}
        </QuestionList>
      </Container>
      <div>
        {isModalOpen && (
          <AskQuestionModal onClose={onClick} onSubmit={handleSubmit} />
        )}
      </div>
    </>
  );
}

export default Forum;
