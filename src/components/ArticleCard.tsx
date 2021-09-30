import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../feature/customerSlice";
import { removeArticle } from "../feature/articleSlice";
import { v4 as uuid } from "uuid";

interface ArticleCardType {
  name: string;
  index: number;
}

function ArticleCard({ name, index }: ArticleCardType) {
  const dispatch = useDispatch();
  return (
    <div
      className="article-card-container"
      onClick={() => {
        dispatch(removeArticle(index));
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

export default ArticleCard;
