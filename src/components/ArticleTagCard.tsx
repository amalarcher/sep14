import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../feature/customerSlice";
import { removeArticleTag } from "../feature/articleTagSlice";
import { v4 as uuid } from "uuid";

interface ArticleTagCardType {
  name: string;
  index: number;
  articleTagId: string; 
  tagId: string;
   articleId: string;
}

function ArticleTagCard({ name, index, articleTagId, tagId, articleId }: ArticleTagCardType) {
  const dispatch = useDispatch();
  return (
    <div
      className="articleTag-card-container"
      onClick={() => {
        dispatch(removeArticleTag(index));
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

export default ArticleTagCard;
