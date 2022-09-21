import { React } from "react";
import s from "./UserFollowers.module.css";
const UserFollowers = () => {
  return (
    <>
      <div className={s.userFollowers}>
        <span className={s.userFollowersItem}>
          <span>1</span> posts
        </span>
        <span className={s.userFollowersItem}>
          <span>10K</span>  followers
        </span>
        <span className={s.userFollowersItem}>
          <span>1,200  </span>  following
        </span>
        {/* <span className={s.userFollowersItem}>2 posts </span>
        <span className={s.userFollowersItem}>2 posts </span> */}
      </div>
    </>
  );
};

export default UserFollowers;
