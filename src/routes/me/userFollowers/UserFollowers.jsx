/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import s from "./UserFollowers.module.css";
const UserFollowers = ({ userFollowers }) => {
  // CUSTOMIZATION DATA (FOLLOWERS,FOLLOWING,POSTS)
  const subscribers = [userFollowers[1]];
  const followers = userFollowers[1].followers;
  const following = userFollowers[1].following;
  //MODAL FUNCTION
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalId, setModalId] = useState("");

  const showModal = (e) => {
    setIsModalVisible(true);
    document.body.style.overflow = "hidden";
    setModalId(e.currentTarget.getAttribute("data--modal-id"));
  };
  const closeModal = () => {
    setIsModalVisible(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className={s.userFollowers}>
        {subscribers.map((data, id) => {
          return (
            <div className={s.userFollowersHeader} key={id}>
              {/* MAP FOR POSTS */}
              <span className={s.userFollowersItem}>
                <span>{data.posts.length}</span> posts
              </span>
              {/* MAP FOR FOLLOWERS */}
              <span
                data--modal-id="1"
                onClick={showModal}
                className={s.userFollowersItem}
              >
                <span>{data.followers.length}</span> followers
              </span>

              {/* MAP FOR FOLLOWING */}
              <span
                data--modal-id="2"
                onClick={showModal}
                className={s.userFollowersItem}
              >
                <span>{data.following.length} </span> following
              </span>
            </div>
          );
        })}
       
        {isModalVisible && (
          <>
            <div className={s.modalDiv}>
              <div className={s.listHeader}>
                {modalId === "1" ? (
                  <h6 className={s.listTitle}>Followers</h6>
                ) : (
                  <h6 className={s.listTitle}>Following</h6>
                )}
                <RiCloseFill className={s.closeBtn} onClick={closeModal} />
              </div>
              <div className={s.scroll}>
                {modalId === "1"
                  ? followers.map((data, id) => {
                      return (
                        <>
                          <div key={id} className={s.followList}>
                            <img
                              className={s.listImg}
                              src={data.avatar}
                              alt={data.username}
                            />
                            <div className={s.list}>
                              <div className={s.texts}>
                                <p> {data.username}</p>
                                <span> {data.bio}</span>
                              </div>
                            </div>
                            <button className={s.removeBtn}> Remove</button>
                          </div>
                        </>
                      );
                    })
                  : following.map((data, id) => {
                      return (
                        <>
                          <div key={id} className={s.followList}>
                            <img
                              className={s.listImg}
                              src={data.avatar}
                              alt={data.username}
                            />
                            <div className={s.list}>
                              <div className={s.texts}>
                                <p> {data.username}</p>
                                <span> {data.bio}</span>
                              </div>
                            </div>
                            <button className={s.removeBtn}> Remove</button>
                          </div>
                        </>
                      );
                    })}
              </div>
            </div>
            <div onClick={closeModal} className={s.overlay}></div>
          </>
        )}
      </div>
    </>
  );
};

export default UserFollowers;
