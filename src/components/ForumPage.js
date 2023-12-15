import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getQuestionsById, getCommentsById } from "../services/api/forum";
import Forum from "./Forum";
import CommentSection from "./Comment";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  padding: 20px;
  @media (max-width: 768px) {
    order: 2; /* Change the order for mobile view */
  }
`;

const MiddleContent = styled.div`
  flex: 5;
  padding: 20px;

  @media (max-width: 768px) {
    order: 1; /* Change the order for mobile view */
  }
`;

const RightPanel = styled.div`
  flex: 2;
  padding: 20px;

  @media (max-width: 768px) {
    order: 3; /* Change the order for mobile view */
  }
`;
const ForumContainer = styled.div`
  max-width: 1000px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  padding: 15px 15px;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ForumTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  ine-height: 1.2;
  letter-spacing: -1px;
`;

const DateAuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ForumDate = styled.span`
  font-size: 1rem;
  color: #888;
  font-style: italic;
`;

const ForumAuthor = styled.span`
  font-size: 1rem;
  color: #555;
  font-weight: 500;
`;

const ForumContent = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #333;
  margin-top: 20px;
`;

const ForumImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 30px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const CommentSectionDiv = styled.div`
  margin-top: 20px;
`;

const isHomePage = true;

function ForumPage() {
  const { id } = useParams();
  const [qId, setQuestionId] = useState();
  const [comments, setComments] = useState([]);

  let [question, setQuestion] = useState([]);
  const getQuestion = async (qId) => {
    const question = await getQuestionsById(qId);
    const comments = await getCommentsById(qId);
    console.log("question", question);
    setQuestion(question.question);
    setComments(comments.comments);
  };

  useEffect(() => {
    setQuestionId(id);
  }, [id]);

  useEffect(() => {
    console.log("qId", qId);
    if (qId) {
      getQuestion(qId);
    }
  }, [qId]);
  return (
    <Container>
      <MiddleContent>
        <div>
          <ForumContainer>
            <ForumTitle>{question.title}</ForumTitle>
            <DateAuthorWrapper>
              <ForumDate>
                {new Date(question.createdAt).toLocaleDateString()}
              </ForumDate>
              <ForumAuthor>by {question?.user?.user_name}</ForumAuthor>
            </DateAuthorWrapper>
            {question.image && (
              <ForumImage src={question.image_url} alt={question.title} />
            )}
            <ForumContent
              dangerouslySetInnerHTML={{ __html: question.description }}
            />
            <CommentSectionDiv>
              <CommentSection
                comments={comments}
                questionId={qId}
              ></CommentSection>
            </CommentSectionDiv>
          </ForumContainer>
        </div>
      </MiddleContent>

      <RightPanel>
        {/* Content for the right panel */}
        <Forum isHomePage={isHomePage}></Forum>
      </RightPanel>
    </Container>
  );
}

export default ForumPage;
