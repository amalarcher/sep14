import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../feature/customerSlice";
import { removeAppUser } from "../feature/appUserSlice";
import { v4 as uuid } from "uuid";

interface AppUserCardType {
  name: string;
  index: number;
  appUserName: string;
  userLogin: string;
  about: string;
}

function AppUserCard({ name, index, appUserName, userLogin, about }: AppUserCardType) {
  const dispatch = useDispatch();
  return (
    <div
      className="appuser-card-container"
      onClick={() => {
        dispatch(removeAppUser(index));
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

export default AppUserCard;
