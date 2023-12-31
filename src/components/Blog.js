import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Common/Card";
import { getBlogsData } from "../services/api/blogs";
import { useNavigate } from "react-router-dom";

const CardGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  /* This will make it responsive. Adjust 280px based on your card's ideal width. */
`;

function CardBasedLayout({ isBookMarked = false }) {
  let [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();
  if (isBookMarked) {
  }
  const getBlogs = async () => {
    const blogs = await getBlogsData();
    console.log("blogs", blogs);
    setBlogPosts(blogs.blogs);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleCardClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <CardGrid>
      {blogPosts.map((post) => (
        <div
          key={post._id}
          onClick={() => handleCardClick(post._id)} // Call handleCardClick when the card is clicked
        >
          <Card
            isBookMarked={isBookMarked}
            key={post._id}
            title={post.title}
            description={post.description}
            imageUrl={post.image_url}
            author={post.author.user_name}
            date={new Date(post.createdAt).toLocaleDateString()}
          />
        </div>
      ))}
    </CardGrid>
  );
}

export default CardBasedLayout;
