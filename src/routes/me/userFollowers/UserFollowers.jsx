import s from "./UserFollowers.module.css";
const UserFollowers = ({ userFollowers }) => {
  // CUSTOMIZATION DATA (FOLLOWERS,FOLLOWING,POSTS)
  const followers = [userFollowers[1]];
  return (
    <>
      <div className={s.userFollowers}>
        {followers.map((data, id) => {
          console.log(data.posts.length);
          return (
            <div key={id}>
              {/* MAP FOR POSTS */}
              <span className={s.userFollowersItem}>
                <span>{data.posts.length}</span> posts
              </span>
              {/* MAP FOR FOLLOWERS */}
              <span className={s.userFollowersItem}>
                <span>{data.followers.length}</span> followers
              </span>
              {/* MAP FOR FOLLOWING */}
              <span className={s.userFollowersItem}>
                <span>{data.following.length} </span> following
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserFollowers;
