import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../feature/customerSlice";
import { removeCommentText } from "../feature/commentTextSlice";
import { v4 as uuid } from "uuid";

interface CommentTextCardType {
  name: string;
  index: number;
}

function CommentTextCard({ name, index }: CommentTextCardType) {
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
