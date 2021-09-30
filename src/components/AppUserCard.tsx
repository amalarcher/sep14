import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer } from "../feature/customerSlice";
import { addAppUserList } from "../feature/appUserListSlice";
import { removeAppUser } from "../feature/appUserSlice";
import { v4 as uuid } from "uuid";
import internal from "stream";

interface AppUserCardType {
  id: string;
  name: string;
  index: string;
}

function AppUserCard({ name, index }: AppUserCardType) {
  const dispatch = useDispatch();
  return (
    <div
      className="appUser-card-container"
      onClick={() => {
        dispatch(removeAppUser(index));
        dispatch(
          addAppUser({
            id: id,
            name,
            ulist: [],
          })
        );
      }}
    >
    <p>{name}</p>       
    </div>
  );
}

export default AppUserCard;
