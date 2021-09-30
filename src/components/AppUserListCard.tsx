import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToAppUserList } from "../feature/appUserListSlice";

interface AppUserListCardType {
  id: string;
  name: string;
  ulist: string[];
}

function AppUserListCard({ id, name, ulist }: AppUserListCardType) {
  const [appUserListInput, setAppUserListInput] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="app-user-list-card-container">
      <h5>{name}</h5>
      <div className="app-user-list-container">
        <div className="app-user-list">
          {ulist.map((ulist) => {
            return <p>{ulist}</p>;
          })}
        </div>
        <div className="app-user-list-input-container">
          <input
            value={appUserListInput}
            onChange={(e) => setAppUserListInput(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(
                addToAppUserList({
                  id,
                  ulist: appUserListInput,
                })
              );
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppUserListCard;
