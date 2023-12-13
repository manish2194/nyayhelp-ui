import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BlogCard from "./Common/BlogCard";
import { getBlogsData } from "../services/api/blogs";
const CardGrid = styled.div`
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  /* This will make it responsive. Adjust 280px based on your card's ideal width. */
`;
import { useNavigate } from "react-router-dom";

function BlogPost({}) {
  const navigate = useNavigate();
  let [blogPosts, setBlogPosts] = useState([]);
  const getBlogs = async () => {
    const blogs = await getBlogsData();
    console.log("blogs", blogs);
    setBlogPosts(blogs.blogs);
  };

  const handleCardClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <CardGrid>
      {blogPosts.map((post) => (
        <div
          key={post._id}
          onClick={() => handleCardClick(post._id)} // Call handleCardClick when the card is clicked
        >
          <BlogCard
            key={post._id}
            title={post.title}
            description={post.content}
            imageUrl={post.image_url}
            author={post?.author.user_name}
            date={new Date(post.createdAt).toLocaleDateString()}
          />
        </div>
      ))}
    </CardGrid>
  );
}

export default BlogPost;
