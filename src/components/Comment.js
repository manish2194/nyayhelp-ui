// import React from "react";
// import styled from "styled-components";
// const Comment = styled.div`
//     display: flex;
//     align-items: flex-start;
//     margin-bottom: 20px;
//   `;

//   const CommentAuthor = styled.div`
//     display: flex;
//     align-items: center;
//     font-size: 1rem;
//     color: #555;
//     font-weight: 500;
//     margin-right: 10px;
//   `;

//   const CommentAvatar = styled.img`
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     margin-right: 10px;
//   `;

//   const CommentText = styled.div`
//     font-size: 1.2rem;
//     line-height: 1.8;
//     color: #333;
//   `;
// const CommentSection = ({comments}) => {

//   return comments.map((comment, index) => (
//     <Comment key={index}>
//       <CommentAuthor>
//         <CommentAvatar
//           src={comment.user.image_url || '/default-avatar.png'} // Use the user's image_url or a default avatar
//           alt={comment.user.user_name}
//         />
//         {comment.user.user_name}
//       </CommentAuthor>
//       <CommentText>{comment.comment}</CommentText>
//     </Comment>
//   ));
// };

// export default CommentSection;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { submitComment, getCommentsById } from "../services/api/forum";

const CommentSectionContainer = styled.div`
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 15px;
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
  margin-right: 15px;
`;

const CommentContent = styled.div`
  flex: 1;
`;

const CommentAuthor = styled.div`
  font-size: 1.4rem;
  font-weight: 600;
  color: #1877f2;
  margin-bottom: 5px;
  font-family: "Arial", sans-serif;
`;

const CommentText = styled.div`
  font-size: 1.2rem;
  line-height: 1.4;
  color: #333;
  font-family: "Arial", sans-serif;
`;

const LikeIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: #1877f2;
  margin-right: 5px;
`;

const LikeCount = styled.div`
  font-size: 1.2rem;
  color: #555;
  display: flex;
  align-items: center;
`;

const CommentHeading = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 15px;
  color: #333;
  font-weight: 600;
`;

const AddCommentSection = styled.div`
  margin-top: 20px;
`;

const AddCommentButton = styled.button`
  background-color: #1877f2;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 10px;
`;

const AddCommentDialog = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 10px;
  padding: 15px;
  margin-top: 10px;
`;

const AddCommentTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const SaveCommentButton = styled.button`
  background-color: #1877f2;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-right: 10px;
`;

const CancelCommentButton = styled.button`
  background-color: #e1e1e1;
  color: #333;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
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
      <CommentHeading>Comments</CommentHeading>
      {commentList.length === 0 ? (
        <p>No comments available.</p>
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
          <AddCommentButton onClick={openAddCommentDialog}>
            Add Comment
          </AddCommentButton>
          <AddCommentDialog isOpen={isAddCommentOpen}>
            <AddCommentTextarea
              placeholder="Write your comment..."
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
