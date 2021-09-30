import React from "react";
import { useDispatch } from "react-redux";
//import { addCustomer } from "../feature/customerSlice";
import { removeTag } from "../feature/tagSlice";
//import { v4 as uuid } from "uuid";

interface TagCardType {
  name: string;
  index: number;
}

function TagCard({ name, index }: TagCardType) {
  const dispatch = useDispatch();
  return (
    <div
      className="reservation-card-container"
      onClick={() => {
        dispatch(removeTag(index));
      }}
    >
      <p>{name}</p>
    </div>
  );
}

export default TagCard;

