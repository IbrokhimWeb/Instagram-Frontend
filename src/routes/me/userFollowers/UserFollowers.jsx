/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import s from "./UserFollowers.module.css";
import { IoCloseSharp } from "react-icons/io";
const UserFollowers = ({ userFollowers }) => {
  // CUSTOMIZATION DATA (FOLLOWERS,FOLLOWING,POSTS)
  const subscribers = [userFollowers[1]];
  const followers = userFollowers[1].followers;
  const following = userFollowers[1].following;
  //MODAL FUNCTION
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalId, setModalId] = useState("");

  console.log(modalId);
  const showModal = (e) => {
    setIsModalVisible(true);
    document.body.style.overflow = "hidden";
    setModalId(e.currentTarget.getAttribute("data--modal-id"));
  };
  const closeModal = () => {
    setIsModalVisible(false);
    document.body.style.overflow = "unset";
  };

  const drawer = () => {
    if (modalId === "1") {
      return followers.map((data, id) => {
        return (
          <div key={id}>
            <div className={s.modalDiv}>
              <h6>followers</h6>
              <IoCloseSharp />
              <div className={s.followList}>
                <div className={s.list}>
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
              </div>
            </div>
            <div onClick={closeModal} className={s.overlay}></div>
          </div>
        );
      });
    } else if (modalId === "2") {
      return following.map((data, id) => {
        return (
          <div key={id}>
            <div className={s.modalDiv}>
              <h6>followers</h6>
              <div className={s.followList}>
                <div className={s.list}>
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
              </div>
            </div>
            <div onClick={closeModal} className={s.overlay}></div>
          </div>
        );
      });
    } else {
      <h1>error</h1>;
    }
  };
  drawer();
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
        {isModalVisible &&
          modalId === "1" &&
          followers.map((data, id) => {
            return (
              <div key={id}>
                <div className={s.modalDiv}>
                  <h6 className={s.listTitle}>Followers</h6>
                  <span> c&:'x</span>
                  <div className={s.followList}>
                    <div className={s.list}>
                      <img
                        className={s.listImg}
                        src={data.avatar}
                        alt={data.username}
                        width={50}
                        height={50}
                      />
                      <div className={s.texts}>
                        <p> {data.username}</p>
                        <span> {data.bio}</span>
                      </div>
                      <button className={s.removeBtn}> Remove</button>
                    </div>
                  </div>
                </div>
                <div onClick={closeModal} className={s.overlay}></div>
              </div>
            );
          })}
        {isModalVisible &&
          modalId === "2" &&
          following.map((data, id) => {
            return (
              <div key={id}>
                <div className={s.modalDiv}>
                  <h6 className={s.listTitle}>Following</h6>
                  <div className={s.followList}>
                    <div className={s.list}>
                      <img
                        className={s.listImg}
                        src={data.avatar}
                        alt="name"
                        width={50}
                        height={50}
                      />
                      <div className={s.texts}>
                        <p className={s.listName}> {data.username}</p>
                        <span className={s.bio}> {data.bio}</span>
                      </div>
                      <button className={s.removeBtn}> Remove</button>
                    </div>
                  </div>
                </div>
                <div onClick={closeModal} className={s.overlay}></div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default UserFollowers;
