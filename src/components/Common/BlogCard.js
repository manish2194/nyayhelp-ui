import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;
  display: flex;
  flex-direction: row-reverse; /* Reversed flex direction to move image to the right */
  margin-bottom: 10px;
  margin-left: 5px;
  min-height: fit-content;
    padding-bottom: 1px;
`;
const CardImageContent = styled.div`
flex: 2;
margin: auto;
`;
const CardContent = styled.div`
  padding: 15px;
  flex: 5;
  text-align: left; /* Align text to the right */
`;

const CardImage = styled.img`

  width: 100%;
  height: 150px; /* Set a fixed height for better center alignment */
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin: 0 auto; /* Center the image horizontally */
  display: block; /* Remove any default inline styles that might affect centering */
`;
const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0px;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6; /* Show up to 3 lines of text */
  -webkit-box-orient: vertical;
  cursor: pointer;
`;

const ReadMoreLink = styled.span`
  color: #007bff;
  cursor: pointer;
  font-weight: 600;
  margin-left: 5px;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const CardAuthor = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
  color: #555;
`;

const CardDate = styled.span`
  font-size: 0.8rem;
  color: #888;
`;

const BlogCard = ({ title, description, imageUrl, author, date }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <CardContainer>
      <CardImageContent>
      <CardImage src={imageUrl} alt={title} />
      </CardImageContent>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {showFullDescription ? description : `${description.slice(0, 300)}...`}
          {description.length > 200 && (
            <ReadMoreLink onClick={toggleDescription}>
              {showFullDescription ? 'Read less' : 'Read more'}
            </ReadMoreLink>
          )}
        </CardDescription>
        <CardMeta>
          <CardAuthor>By {author}</CardAuthor>
          <CardDate>{date}</CardDate>
        </CardMeta>
      </CardContent>
    </CardContainer>
  );
};

export default BlogCard;

