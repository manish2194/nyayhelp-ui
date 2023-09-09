import React from "react";
import styled from "styled-components";
import Card from "./Common/Card";

const CardGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  /* This will make it responsive. Adjust 280px based on your card's ideal width. */
`;

function CardBasedLayout({}) {
  const blogPostSample = [
    {
      id: 1,
      title: "Understanding Contract Law",
      description:
        "A deep dive into the intricacies of contract law and its applications in the modern world.",
      imageUrl: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89",
      author: "John Doe",
      date: "August 7, 2023",
    },
    {
      id: 2,
      title: "Estate Planning Basics",
      description:
        "Everything you need to know about planning your estate and why it's crucial for your loved ones.",
      imageUrl: "https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b",
      author: "Jane Smith",
      date: "July 15, 2023",
    },
    {
      id: 3,
      title: "Legal Implications of AI Technology",
      description:
        "Exploring the legal challenges and considerations when dealing with artificial intelligence.",
      imageUrl: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
      author: "Robert Brown",
      date: "June 20, 2023",
    },
    {
      id: 4,
      title: "The Future of Intellectual Property",
      description:
        "How intellectual property rights are evolving in the face of rapid technological advancements.",
      imageUrl: "https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b",
      author: "Emily Clark",
      date: "May 28, 2023",
    },
    {
      id: 5,
      title: "Digital Privacy in 2023",
      description:
        "A comprehensive review of digital privacy laws and practices in the current year.",
      imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e",
      author: "Alan Walker",
      date: "April 14, 2023",
    },
  ];

  const blogPosts = [
    ...blogPostSample,
    ...blogPostSample,
    ...blogPostSample,
    ...blogPostSample,
  ];

  return (
    <CardGrid>
      {blogPosts.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          author={post.author}
          date={post.date}
        />
      ))}
    </CardGrid>
  );
}

export default CardBasedLayout;
