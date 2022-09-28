/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import s from "./UserFollowers.module.css";
const UserFollowers = ({ userFollowers }) => {
  // CUSTOMIZATION DATA (FOLLOWERS,FOLLOWING,POSTS)
  const subscribers = [userFollowers[1]];
  const followers = userFollowers[1].followers;
  //MODAL FUNCTION
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setIsModalVisible(false);
    document.body.style.overflow = "unset";
    document.body.style.paddingRight = "35px";
  };
  return (
    <>
      <div className={s.userFollowers}>
        {subscribers.map((data, id) => {
          return (
            <div key={id}>
              {/* MAP FOR POSTS */}
              <span className={s.userFollowersItem}>
                <span>{data.posts.length}</span> posts
              </span>
              {/* MAP FOR FOLLOWERS */}
              <span onClick={showModal} className={s.userFollowersItem}>
                <span>{data.followers.length}</span> followers
              </span>
              {isModalVisible && (
                <>
                  <div className={s.modalDiv}>
                    <h6>followers</h6>
                    <div className={s.followList}>
                      {followers.map((data, id) => {
                        return (
                          <div className={s.list} key={id}>
                            <img
                              className={s.lisImg}
                              src={data.avatar}
                              alt={data.username}
                              width={50}
                              height={50}
                            />
                            <div className={s.texts}>
                              <p> {data.username}</p>
                              <span> {data.bio}</span>
                            </div>
                            <button> remove</button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div onClick={closeModal} className={s.overlay}></div>
                  {/* to blur background and close modal when touch anywhere */}
                </>
              )}
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
