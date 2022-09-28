import { React } from "react";
import s from "./UserFollowers.module.css";
const UserFollowers = ({ userProfile }) => {
  let userState = [userProfile[1]];
  return (
    <>
      <div className={s.followers}>
        {userState.map((element, inx) => {
          return (
            <div key={inx}>
              <h1>{element.username}</h1>
              <h1>{element.bio}</h1>
              <img src={element.avatar} alt={element.username} />
            </div>
          );
        })}
        <span>2 posts </span>
        <span> 13123 followers </span>
        <span> 13123 following</span>
      </div>
    </>
  );
};

export default UserFollowers;
