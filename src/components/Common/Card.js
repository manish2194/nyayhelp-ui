import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: #666;
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
`;

const CardDate = styled.span`
  color: #888;
  font-size: 0.8rem;
`;

const Card =  ({ title, description, imageUrl, author, date })  => {
  return (
    <CardContainer>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardMeta>
          <CardAuthor>{author}</CardAuthor>
          <CardDate>{date}</CardDate>
        </CardMeta>
      </CardContent>
    </CardContainer>
  );
}

export default Card;
