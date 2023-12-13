import BlogPost from "./BlogPost";
import Blog from "./Blog";
import Forum from "./Forum";
import React from "react";
import styled from "styled-components";

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
  margin: 0rem 1rem;
  height: 100%;
  box-shadow: 4px 0 4px rgba(0, 0, 0, 0.1); /* Add box shadow on the right side */
  @media (max-width: 768px) {
    order: 2; /* Change the order for mobile view */
    
  }
`;


const MiddleContent = styled.div`
  flex: 5;
  margin: 0rem 1rem;
  height: 100%;
  @media (max-width: 768px) {
    order: 1; /* Change the order for mobile view */
  }
`;

const RightPanel = styled.div`
  flex: 3;
  margin: 0rem 1rem;
  background: #f7f7f7;
  height: 100%;
  @media (max-width: 768px) {
    order: 3; /* Change the order for mobile view */
  }
`;
const BookmarkedDiv = styled.div`
  padding: 10px;
  border-radius: 5px;
`;

const BookmarkedTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const isBookMarked = true;
const isHomePage = true;
const Home = () => {
  return (
    <Container>
      <LeftPanel>
      <BookmarkedDiv>
            <BookmarkedTitle>Bookmarked</BookmarkedTitle>
          </BookmarkedDiv>
        <Blog isBookMarked={isBookMarked}></Blog>
      </LeftPanel>
      <MiddleContent>
        <div>
          <BlogPost />
        </div>
      </MiddleContent>

      <RightPanel>
        <Forum isHomePage={isHomePage}></Forum>
      </RightPanel>
    </Container>
  );
};
export default Home;
