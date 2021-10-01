import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../feature/customerSlice";
//import { addCustomer } from "../feature/customerSlice";
import { removeTag } from "../feature/tagSlice";
import { v4 as uuid } from "uuid";

interface TagCardType {
  name: string;
  index: number;
  tagId: string;
  description: string;
}

function TagCard({ name, index, tagId, description }: TagCardType) {
  const dispatch = useDispatch();
  return (
    <div
      className="tag-card-container"
      onClick={() => {
        dispatch(removeTag(index));
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

export default TagCard;

