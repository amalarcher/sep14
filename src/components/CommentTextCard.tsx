import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../feature/customerSlice";
import { removeCommentText } from "../feature/commentTextSlice";
import { v4 as uuid } from "uuid";

interface CommentTextCardType {
  name: string;
  index: number;
  commentTextId: string;
  articleId: string;
  authorId: string;
  text: string;
  dateCreated: string;
}

function CommentTextCard({ name, index, commentTextId, articleId, authorId, text, dateCreated }: CommentTextCardType) {
  const dispatch = useDispatch();
  return (
    <div
      className="commenttext-card-container"
      onClick={() => {
        dispatch(removeCommentText(index));
        dispatch(
          addCustomer({
            id: uuid(),
            name,
            food: [],
          })
        );
      }}
    >
      <p>{name}</p>
    </div>
  );
}

export default CommentTextCard;
