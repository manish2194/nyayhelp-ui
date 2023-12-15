import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getBlogById } from "../services/api/blogs";

const BlogContainer = styled.div`
  max-width: 80%;
  margin: auto auto;
  // background-color: #fff;
  // padding: 10px 20px;
  // border-radius: 10px;
  // box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  // transition: box-shadow 0.3s;

  // &:hover {
  //   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  // }
`;

const BlogTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 5px;
  font-weight: 600;
`;

const DateAuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const BlogDate = styled.span`
  font-size: 1rem;
  color: #888;
`;

const BlogAuthor = styled.span`
  font-size: 1rem;
  color: #555;
`;

const BlogContent = styled.div`
  font-size: 1.3rem;
  line-height: 1.6;
  margin-top: 25px;
`;

const BlogImage = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-height: 300px;
`;

function BlogPage() {
  const { id: blogId } = useParams();
  let [blog, setBlog] = useState([]);
  const getBlog = async () => {
    const blogs = await getBlogById(blogId);
    setBlog(blogs.blog);
  };

  useEffect(() => {
    getBlog(blogId);
  }, []);
  return (
    <BlogContainer>
      <BlogTitle>{blog.title}</BlogTitle>
      <DateAuthorWrapper>
        <BlogDate>{new Date(blog.createdAt).toLocaleDateString()}</BlogDate>
        <BlogAuthor>by {blog.author?.user_name}</BlogAuthor>
      </DateAuthorWrapper>
      {blog.image_url && <BlogImage src={blog.image_url} alt={blog.title} />}
      <BlogContent dangerouslySetInnerHTML={{ __html: blog.content }} />
    </BlogContainer>
  );
}

export default BlogPage;
