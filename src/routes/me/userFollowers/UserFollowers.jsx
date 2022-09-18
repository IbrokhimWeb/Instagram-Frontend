import React from "react";
import s from "./UserFollowers.module.css";
const UserFollowers = (userProfile) => {
  return (
    <>
      <div className={s.followers}>
        {/* {userProfile.map((e, i) => {
          return (
            <div key={i}>
              <h1>{e.followers}</h1>
            </div>
          );
        })} */}

        <h1>followers</h1>
        <h1>following</h1>
      </div>
    </>
  );
};

export default UserFollowers;
