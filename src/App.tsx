import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addReservation } from "./feature/reservationSlice";
import { addAppUser } from "./feature/appUserSlice";
import { addArticle } from "./feature/articleSlice";
import { addArticleTag } from "./feature/articleTagSlice";
import { addCommentText } from "./feature/commentTextSlice";
import { addTag } from "./feature/tagSlice";
import { RootState } from "./app/store";

import ReservationCard from "./components/ReservationCard";
import AppUserCard from "./components/AppUserCard";
import ArticleCard from "./components/ArticleCard";
import ArticleTagCard from "./components/ArticleTagCard";
import CommentTextCard from "./components/CommentTextCard";
import TagCard from "./components/TagCard";
import CustomerCard from "./components/CustomerCard";
import AppUserListCard from "./components/AppUserListCard";

function App() {

  const dispatch = useDispatch();

  const [reservationNameInput, setReservationNameInput] = useState("");
  const [appUserInput, setAppUserInput] = useState("");
  const [articleInput, setArticleInput] = useState("");
  const [articleTagInput, setArticleTagInput] = useState("");
  const [commentTextInput, setCommentTextInput] = useState("");
  const [tagInput, setTagInput] = useState("");

  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const appUsers = useSelector(
    (state: RootState) => state.appUsers.value
  );
  const articles = useSelector(
    (state: RootState) => state.articles.value
  );
  const articleTags = useSelector(
    (state: RootState) => state.articleTags.value
  );
  const commentTexts = useSelector(
    (state: RootState) => state.commentTexts.value
  );
  const tags = useSelector(
    (state: RootState) => state.tags.value
  );


  const customers = useSelector((state: RootState) => state.customer.value);

  const appUserLists = useSelector((state: RootState) => state.appUserLists.value);


  const handleAddReservations = () => {
    dispatch(addReservation(reservationNameInput));
  };

  const handleAddCommentTexts = () => {
    dispatch(addCommentText(commentTextInput));
  };  
  const handleAddArticles = () => {
    dispatch(addArticle(articleInput));
  };  
  const handleAddArticleTags = () => {
    dispatch(addArticleTag(articleTagInput));
  };  
  const handleAddAppUsers = () => {
    dispatch(addAppUser(appUserInput));
  };
  const handleAddTags = () => {
    dispatch(addTag(tagInput));
  };


//
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">React Redux list managment example: sep14</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationNameInput}
              onChange={(e) => {
                setReservationNameInput(e.target.value);
              }}
            />
            <button onClick={handleAddReservations}>Add Reservation</button>
          </div>
        </div>
        <div className="commentText-container">
          <div>
            <h5 className="commentText-header">CommentTexts</h5>
            <div className="commentText-cards-container">
              {commentTexts.map((name, index) => {
                return <CommentTextCard name={name} index={index} commentTextId='commentTextId' articleId='articleId' authorId='authorId' text='this is some text' dateCreated='09/29/2021'/>;
              })}
            </div>
          </div>
          <div className="commentText-input-container">
            <input
              value={commentTextInput}
              onChange={(e) => {
                setCommentTextInput(e.target.value);
              }}
            />
            <button onClick={handleAddCommentTexts}>Add CommentText</button>
          </div>
        </div>

        <div className="appuser-container">
          <div>
            <h5 className="appuser-header">AppUsers</h5>
            <div className="appuser-cards-container">
              {appUsers.map((name, index) => {
                return <AppUserCard name={name} index={index} appUserName='appUserName' userLogin='userLogin' about='about'/>;
              })}
            </div>
          </div>
          <div className="appuser-input-container">
            <input
              value={appUserInput}
              onChange={(e) => {
                setAppUserInput(e.target.value);
              }}
            />
            <button onClick={handleAddAppUsers}>Add AppUser</button>
          </div>
        </div>


        <div className="article-container">
          <div>
            <h5 className="article-header">Articles</h5>
            <div className="article-cards-container">
              {articles.map((name, index) => {
                return <ArticleCard name={name} index={index} articleId='articleId' articleTitle='articleTitle' appUserId='12' thumbnailUrl='http://google.com' payload='json payload' dateCreated='09-30-2021'/>;
              })}
            </div>
          </div>

{/*
          <div className="app-user-list-container">
          {appUserLists.map((appUserList: { id: React.Key | null | undefined; name: string; ulist: string[]; }) => { 
            return (
              <AppUserListCard
                id={appUserList.id}
                name={appUserList.name}
                ulist={appUserList.ulist}
                key={appUserList.id}
              />
            );.tsx file commentTextSlice
          })}
        </div>

        */}

          <div className="article-input-container">
            <input
              value={articleInput}
              onChange={(e) => {
                setArticleInput(e.target.value);
              }}
            />
            <button onClick={handleAddArticles}>Add Article</button>
          </div>
        </div>
        <div className="articleTag-container">
          <div>
            <h5 className="articleTag-header">ArticleTags</h5>
            <div className="articleTag-cards-container">
              {articleTags.map((name, index) => {
                return <ArticleTagCard name={name} index={index} articleTagId='articleTagId' tagId='tagId' articleId='articleId' />;
              })}
            </div>
          </div>
          <div className="articleTag-input-container">
            <input
              value={articleTagInput}
              onChange={(e) => {
                setArticleTagInput(e.target.value);
              }}
            />
            <button onClick={handleAddArticleTags}>Add ArticleTag</button>
          </div>
        </div>
        <div className="tag-container">
          <div>
            <h5 className="tag-header">Tags</h5>
            <div className="tag-cards-container">
              {tags.map((name, index) => {
                return <TagCard name={name} index={index} tagId='tagId' description='description' />;
              })}
            </div>
          </div>
          <div className="tag-input-container">
            <input
              value={tagInput}
              onChange={(e) => {
                setTagInput(e.target.value);
              }}
            />
            <button onClick={handleAddTags}>Add Tag</button>
          </div>
        </div>
 

        <div className="customer-food-container">
          {customers.map((customer) => {
            return (
              <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
                key={customer.id}
              />
            );
          })}
        </div>

        
      </div>
    </div>
  );
}

export default App;
