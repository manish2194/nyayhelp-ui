import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { submitComment, getCommentsById } from "../services/api/forum";

const CommentSectionContainer = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 10px;
  background-color: #f9f9f9;
`;

const Comment = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const CommentAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 5px;
`;

const CommentContent = styled.div`
  flex: 1;
`;

const CommentAuthor = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 2px;
`;

const CommentText = styled.div`
  font-size: 1rem;
  line-height: 1.4;
`;

const LikeIcon = styled(FontAwesomeIcon)`
  font-size: 1rem;
  color: #1877f2;
  margin-left: 5px;
`;

const LikeCount = styled.div`
  font-size: 1rem;
  color: #555;
`;

const CommentHeading = styled.h2`
  margin: 0px;
  font-size: 1rem;
  margin-bottom: 5px;
  font-weight: 200;
`;

const AddCommentSection = styled.div`
  margin-top: 20px;
`;

const AddCommentButton = styled.button`
  background-color: #1877f2;
  color: #fff;
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;
const AddCommentDialog = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 5px;
  margin-top: 5px;
`;

const AddCommentTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
`;

const SaveCommentButton = styled.button`
  background-color: #1877f2;
  color: #fff;
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-right: 10px;
`;

const CancelCommentButton = styled.button`
  background-color: #e1e1e1;
  color: #333;
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;

const CommentSection = ({ comments, questionId }) => {
  const [commentList, setComments] = useState([]);
  const [isAddCommentOpen, setAddCommentOpen] = useState(false);
  const [newComment, setNewComment] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setComments(comments);
  }, [comments]);

  const openAddCommentDialog = () => {
    setAddCommentOpen(true);
  };

  const closeAddCommentDialog = () => {
    setAddCommentOpen(false);
  };

  const handleNewCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const addComment = async () => {
    // Implement your logic to save the new comment
    console.log(newComment);
    let addedComment = await submitComment(questionId, { text: newComment });
    alert("Comment submitted successfully");
    const newCommentList = await getCommentsById(questionId);
    // console.log("commentList", commentList.comments);
    setComments(newCommentList.comments);
    // Close the dialog and reset the comment input
    closeAddCommentDialog();
    setNewComment("");
  };

  return (
    <CommentSectionContainer>
      <CommentHeading>Replies</CommentHeading>
      {commentList.length === 0 ? (
        <p>No reply available.</p>
      ) : (
        commentList.map((comment, index) => (
          <Comment key={index}>
            <CommentAvatar
              src={
                comment.user.image_url ||
                "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89"
              }
              alt={comment.user.user_name}
            />
            <CommentContent>
              <CommentAuthor>{comment.user.user_name}</CommentAuthor>
              <CommentText>{comment.text}</CommentText>
              <LikeCount>
                {comment.likes}
                <LikeIcon icon={faThumbsUp} />
              </LikeCount>
            </CommentContent>
          </Comment>
        ))
      )}
      {user && (
        <AddCommentSection>
          {!isAddCommentOpen && (
            <AddCommentButton onClick={openAddCommentDialog}>
              Leave a reply
            </AddCommentButton>
          )}
          <AddCommentDialog isOpen={isAddCommentOpen}>
            <AddCommentTextarea
              placeholder="Add a reply ... "
              value={newComment}
              onChange={handleNewCommentChange}
            />
            <SaveCommentButton onClick={addComment}>Save</SaveCommentButton>
            <CancelCommentButton onClick={closeAddCommentDialog}>
              Cancel
            </CancelCommentButton>
          </AddCommentDialog>
        </AddCommentSection>
      )}
    </CommentSectionContainer>
  );
};

export default CommentSection;
