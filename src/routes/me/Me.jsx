// @ts-nocheck
import React from "react";
import s from "./Me.module.css";
import { users } from "../../static/static";
const Me = () => {
  return (
    <>
      <div className={s.container}>
        <div className={s.userProfile}>
          {users.map((user, id) => {
            return (
              <div key={id} className={s.userProfileHeader}>
                <img className={s.userAvatar} src={user.avatar} alt={user.username} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Me;
